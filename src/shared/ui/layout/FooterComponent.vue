<template>
  <q-footer elevated>
    <q-toolbar class="q-px-md q-py-sm">
      <q-toolbar-title class="text-left text-caption">
        {{ year }} &copy; SISTEMA INTEGRAL PENITENCIARIO FEDERAL | VERSIÓN {{ version || '...' }}
      </q-toolbar-title>

      <div class="text-right text-grey-6 text-caption q-ml-auto">
        FECHA DE CONSTRUCCIÓN: {{ buildDate || '...' }} - {{ commit || '...' }}
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const year = new Date().getFullYear();
const version = ref('');
const buildDate = ref('');
const commit = ref('');

onMounted(async () => {
  try {
    const res = await fetch('/assets/version.json');
    const data = await res.json();

    version.value = data.version;
    buildDate.value = data.buildDate;
    commit.value = data.commit;
  } catch (error) {
    console.error('Error al cargar versión del frontend:', error);
  }
});

</script>
