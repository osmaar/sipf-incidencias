import type { RouteRecordRaw } from 'vue-router';
import SancionesJuridicopage from 'src/pages/juridico/SancionesPage.vue';
import SancionesTecnicoPage from 'src/pages/tecnico/SancionesPage.vue';
import IncidenciasJuridicoPage from 'src/pages/juridico/IncidenciasPage.vue';
import IncidenciasTecnicoPage from 'src/pages/tecnico/IncidenciasPage.vue';
import SancionesCreatePage from 'pages/juridico/SancionesCreatePage.vue';
import NotLogged from 'src/pages/NotLogged.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'sanciones-tecnico',
        component: SancionesTecnicoPage,
        meta: { title: 'Sanciones Técnico', requiresAuth: true },
      },
      {
        path: 'sanciones-juridico',
        component: SancionesJuridicopage,
        meta: { title: 'Sanciones Jurídico', requiresAuth: true },
      },
      {
        path: 'incidencias-tecnico',
        component: IncidenciasTecnicoPage,
        meta: { title: 'Incidencias Técnico', requiresAuth: true },
      },
      {
        path: 'incidencias-juridico',
        component: IncidenciasJuridicoPage,
        meta: { title: 'Incidencias Jurídico', requiresAuth: true },
      },

      {
        path: 'sanciones-crear',
        component: SancionesCreatePage,
        meta: { title: 'Incidencias Jurídico', requiresAuth: true },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/not-logged',
    component: () => NotLogged,
  },
  {
    path: '/:catchAll(.*)*',
    component: () => SancionesTecnicoPage,
  },
];

export default routes;
