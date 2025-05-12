import type { RouteRecordRaw } from 'vue-router';

// Lazy load siempre para consistencia y rendimiento
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'incidencias-tecnico',
        component: () => import('pages/tecnico/IncidenciasPage.vue'),
        meta: { title: 'Incidencias Técnico', requiresAuth: true },
      },
    ],
  },
  {
    path: '/not-logged',
    component: () => import('pages/NotLogged.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/NotLogged.vue'),
  },
];

export default routes;
