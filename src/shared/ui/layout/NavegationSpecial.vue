<template>
  <q-card class=" q-pa-md rounded-2xl p-4 bg-white border border-gray-100"
    style="box-shadow: 0 10px 64px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.14), 0 10px 3px -1px rgba(0, 0, 0, 0.12);">
    <div class="row items-center justify-between q-gutter-md">
      <!-- Botones lado izquierdo -->
      <div class="row items-center q-gutter-sm">
        <q-btn icon="keyboard_backspace" @click="redirectSipf" flat class="text-primary" label="Regresar al Menú" />
        <q-btn icon="account_box" flat :label="isPPL ? 'Ocultar ficha PPL' : 'Mostrar ficha PPL'" @click="toggleFicha"
          class="text-primary" />
      </div>

      <!-- BREADCRUM alineado derecha -->
      <div class="q-ml-auto">
        <q-breadcrumbs separator=">">
          <q-breadcrumbs-el label="Menú" icon="home" />
          <q-breadcrumbs-el :label="titulo" class="text-secondary" />
        </q-breadcrumbs>
      </div>
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { Ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const titulo: string = route.meta.title as string ?? 'Sin título';

const isPPL = inject('isPPL') as Ref<boolean>;
const toggleFicha = inject('toggleFicha') as () => void;

function redirectSipf() {
  const urlSipf = import.meta.env.VITE_APP_FRONTEND;
  window.location.href = urlSipf;
}
</script>
