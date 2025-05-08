<template>
  <q-card class="q-ma-md q-pa-md">
    <q-card-body>
      <q-btn icon="keyboard_backspace" @click="redirectSipf" flat class="tw-text-emerald-900"
        >Regresar Home SIPF</q-btn
      >
      <router-view />
    </q-card-body>
  </q-card>
</template>

<script setup lang="ts">
function redirectSipf() {
  const urlSipf = import.meta.env.VITE_APP_FRONTEND;
  window.location.href = urlSipf;
}
</script>
