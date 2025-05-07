<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

onMounted(() => {
  const token = route.query.token;
  const ppl = route.query.ppl;
  console.log('Entra en esta parte');
});
</script>
