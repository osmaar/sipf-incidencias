<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">No estas logueado</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        @click="redirectSipf"
        label="Ir a SIPF"
        no-caps
      />
    </div>
  </div>
</template>

<script setup lang="ts">
function redirectSipf() {
  const urlSipf = import.meta.env.VITE_APP_FRONTEND;
  window.location.href = urlSipf;
}
</script>
