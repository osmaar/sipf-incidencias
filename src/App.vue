<template>
  <router-view />
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useSessionStore } from 'stores/session';

const session = useSessionStore();

onBeforeMount(() => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get('token');
  const persona = params.get('persona')
    ? JSON.parse(decodeURIComponent(params.get('persona')!))
    : null;
  const expediente = params.get('expediente')
    ? JSON.parse(decodeURIComponent(params.get('expediente')!))
    : null;

  session.setToken(token ?? '');
  session.setPersona(persona);
  session.setExpediente(expediente);
});
</script>
