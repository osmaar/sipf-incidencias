import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import routes from './routes';
import { checkAuthAndPermissions } from 'src/shared/lib/guards/auth.guard';

/**
 * @function
 * @name createRouterInstance
 * @description Crea la instancia del router de Vue según el modo de ejecución (SSR, history o hash)
 * @returns {Router} Instancia configurada de Vue Router
 */
export default function () {
  // Determina el tipo de historial según el entorno (SSR o cliente)
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

  /**
   * @constant
   * @name Router
   * @type {Router}
   * @description Instancia principal de Vue Router con configuración base y rutas
   */
  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  /**
   * @description Guard global antes de cada navegación.
   * Valida si el usuario está autenticado y tiene los permisos necesarios según `meta`.
   *
   * @param {RouteLocationNormalized} to - Ruta destino
   * @param {RouteLocationNormalized} from - Ruta origen
   * @param {NavigationGuardNext} next - Función para continuar o bloquear la navegación
   */
  Router.beforeEach((to, from, next) => {
    const redirect = checkAuthAndPermissions(to); // Verifica token y permisos
    if (redirect) return next(redirect); // Redirige si no cumple
    next(); // Permite si todo está OK
  });

  /**
   * @description Cambia el título de la pestaña según la ruta visitada.
   *
   * @param {RouteLocationNormalized} to - Ruta destino
   */
  Router.afterEach((to) => {
    const baseTitle = 'Sistema Integral Penitenciario Federal';
    const routeTitle = to.meta?.title as string;
    document.title = routeTitle ? `${baseTitle} - ${routeTitle}` : baseTitle;
  });

  return Router;
}
