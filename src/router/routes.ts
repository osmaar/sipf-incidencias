import type { RouteRecordRaw } from 'vue-router';
import SancionesJuridicopage from 'src/pages/juridico/SancionesPage.vue';
import SancionesTecnicoPage from 'src/pages/tecnico/SancionesPage.vue';
import IncidenciasJuridicoPage from 'src/pages/juridico/IncidenciasPage.vue';
import IncidenciasTecnicoPage from 'src/pages/tecnico/IncidenciasPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'sanciones-tecnico',
        component: SancionesTecnicoPage,
        meta: { title: 'Sanciones Técnico' },
      },
      {
        path: 'sanciones-juridico',
        component: SancionesJuridicopage,
        meta: { title: 'Sanciones Jurídico' },
      },
      {
        path: 'incidencias-tecnico',
        component: IncidenciasTecnicoPage,
        meta: { title: 'Incidencias Técnico' },
      },
      {
        path: 'incidencias-juridico',
        component: IncidenciasJuridicoPage,
        meta: { title: 'Incidencias Jurídico' },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
