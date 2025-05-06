<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <div class="titulo-wrapper">
            <img :src="ImgLogo" class="img-logo" />
            <span class="titulo-texto">{{ titulo }}</span>
          </div>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/sanciones-tecnico" label="Sanciones - tecnico" />
        <q-route-tab to="/sanciones-juridico" label="Sanciones - juridico" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import ImgLogo from 'src/assets/img/logo.png';

const route = useRoute();

const titulo = computed(() => route.meta.title || 'Título por defecto');
</script>
<style scoped>
.titulo-wrapper {
  display: flex;
  align-items: center; /* Alinea verticalmente al centro */
  gap: 12px; /* Espacio entre logo y texto */
}

.img-logo {
  width: 80px; /* Ajusta el tamaño si era muy alto */
  display: block;
}

.titulo-texto {
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1;
}
</style>
