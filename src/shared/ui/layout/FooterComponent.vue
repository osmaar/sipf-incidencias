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
import { BaseService } from 'src/app/services/baseService';

const year = new Date().getFullYear();
const version = ref('');
const buildDate = ref('');
const commit = ref('');

onMounted(async () => {
  const baseService = new BaseService();
  try {
    const response = await baseService.get<{ version: string; buildDate: string; commit: string }>(
      '/sipf/assets/version.json'
    );
    if (response) {
      version.value = response.version;
      buildDate.value = response.buildDate;
      commit.value = response.commit;
    } else {
      console.error('Error al obtener la versión del servicio');
    }
  } catch (error) {
    console.error('Error en la petición del footer:', error);
  }
});
</script>
