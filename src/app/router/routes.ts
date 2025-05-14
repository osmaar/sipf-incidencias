import type { RouteRecordRaw } from 'vue-router';

// Lazy load siempre para consistencia y rendimiento
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        redirect: 'inicio',
      },
      {
        path: 'inicio',
        component: () => import('pages/home/HomePage.vue'),
        meta: {
          title: 'Inicio',
          requiresAuth: true,
          permisos: ['juridico-sanciones'], // Permisos para acceder a la página,
        },
      },
    ],
  },
  {
    path: '/not-logged',
    component: () => import('pages/errores/NotLogged.vue'),
  },
  {
    path: '/forbidden',
    component: () => import('pages/errores/ErrorForbidden.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/errores/ErrorNotFound.vue'),
  },
];

export default routes;
