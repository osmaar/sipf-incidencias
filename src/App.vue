<template>
  <router-view />
</template>

<script setup lang="ts">
import { onBeforeMount, watch } from 'vue';
import { useSessionStore } from 'stores/session';

const session = useSessionStore();

onBeforeMount(() => {
  session.$reset();
  session.loadFromStorage();
  console.log('🟢 Datos de sesión cargados desde App.vue:', {
    token: session.token,
    persona: session.persona,
    expediente: session.expediente,
  });
});

watch(
  () => session.token,
  (val) => {
    console.log('Token cambió:', val);
  },
);
</script>
