import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import routes from './routes';
import { useSessionStore } from 'src/stores/session';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function () {
  let createHistory:
    | typeof createMemoryHistory
    | typeof createWebHistory
    | typeof createWebHashHistory;

  if (process.env.SERVER) {
    createHistory = createMemoryHistory;
  } else if (process.env.VUE_ROUTER_MODE === 'history') {
    createHistory = createWebHistory;
  } else {
    createHistory = createWebHashHistory;
  }

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    const session = useSessionStore();

    if (to.meta.requiresAuth && !session.token) {
      next('/not-logged'); // 🔒 Redirige si no hay token
    } else {
      next(); // ✅ Permite el acceso
    }
  });

  return Router;
}
