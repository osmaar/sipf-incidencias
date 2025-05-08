<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useSessionStore } from 'src/stores/session';

const session = useSessionStore();

onMounted(() => {
  const token = session.token;
  const persona = session.persona;

  if (token == null) {
    console.log('Token no existe');
  }

  console.log('Token desde store:', [token, persona]);
});
</script>
