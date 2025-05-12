<template>
  <div class="flex items-center space-x-2 text-sm">
    <span class="font-semibold">
      {{ centro.nombre_completo }} {{ centro.tipo ? '(' + centro.tipo + ')' : '' }}
    </span>
    <span>&nbsp;&nbsp;</span>
    <span style="font-size: smaller; color: #51d28c">
      {{ currentTime }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { Centro } from 'src/entities/centro/centro.model';

defineProps<{ centro: Centro }>();

const currentTime = ref(new Date().toLocaleString());

let intervalId: ReturnType<typeof setInterval>;

onMounted(() => {
  intervalId = setInterval(() => {
    currentTime.value = new Date().toLocaleString();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
