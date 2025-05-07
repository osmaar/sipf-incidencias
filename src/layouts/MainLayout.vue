<template>
  <q-layout view="lHh lpR fFf">
    <q-header elevated class="tw-bg-emerald-900 text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <div class="titulo-wrapper">
            <img :src="ImgLogo" class="img-logo" />
            <span class="titulo-texto">{{ titulo }}</span>
          </div>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/sanciones-tecnico" label="Incidencias - tecnico" />
        <q-route-tab to="/sanciones-juridico" label="Incidencias - juridico" />
        <q-route-tab to="/sanciones-tecnico" label="Sanciones - tecnico" />
        <q-route-tab to="/sanciones-juridico" label="Sanciones - juridico" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <div class="row">
        <div class="col-2">
          <q-card class="q-ma-md q-pa-md">
            <div class="tw-bg-emerald-900 text-center text-white">
              ID PPL:[<span class="tw-text-green-500">997</span>]
            </div>
            <q-card-section class="text-center">
              <q-avatar size="150px">
                <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
              </q-avatar>
              <p class="q-mt-lg tw-font-semibold tw-font-stretch-150% tw-tracking-wider">
                Nombre de PPL
              </p>
              <p class="tw-font-light">29 anios de edad</p>
            </q-card-section>
            <div class="tw-bg-emerald-900 text-center text-white">Centro (masculino)</div>
            <q-card-section class="text-center">
              <p class="tw-text-green-500">CEFERESO No. 14</p>
              <p>Tipo de Ingreso:</p>
              <p class="tw-text-green-500">NUEVO INGRESO</p>
              <p>Estatus: <span class="tw-text-green-500">INGRESO</span></p>
            </q-card-section>
            <div class="tw-bg-emerald-900 text-center text-white">Expediente actual</div>
            <q-card-section class="text-center">
              <p>Núm.</p>
              <p class="tw-text-green-500">CFRS14/GP/006902/2025</p>
              <p>Estatus: <span class="tw-text-green-500">IMPUTADO</span></p>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-10">
          <q-card class="q-ma-md q-pa-md">
            <q-card-body>
              <router-view />
            </q-card-body>
          </q-card>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import ImgLogo from 'src/assets/img/logo.png';

const route = useRoute();

const titulo = computed(() => route.meta.title || 'Home');
</script>
<style scoped>
.titulo-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.img-logo {
  width: 80px;
  display: block;
}

.titulo-texto {
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1;
}
</style>
