<template>
  <div v-if="isLoading" class="loading-overlay">
    <q-spinner-gears color="primary" size="10em" />
  </div>
  <div class="row" v-if="!isLoading">
    <div class="col-12">
      <p class="text-xl text-center">LISTA DE INCIDENCIAS</p>
      <table class="q-table">
        <thead class="text-center">
          <tr>
            <th><q-checkbox v-model="objectTetcnico" /></th>
            <th class="text-left">Folio</th>
            <th class="text-left">Fecha y hora</th>
            <th class="text-left">Tipo de incidencia</th>
            <th class="text-left">Personal que custodia</th>
            <th class="text-left">Cargo del personal</th>
            <th class="text-left">Estatus de incidencia</th>
            <th class="text-left">Acciones</th>
          </tr>
        </thead>
        <tbody v-if="data.length > 0">
          <tr v-for="(incidencia, index) in data" :key="index">
            <td class="text-center"><q-checkbox v-model="objectTetcnico" :tabindex="index" /></td>
            <td>{{ incidencia.folio }}</td>
            <td>{{ incidencia.fecha_hora_registro }}</td>
            <td>{{ incidencia.tipo_incidente_descripcion }}</td>
            <td>{{ incidencia.persona_registra }}</td>
            <td>{{ incidencia.persona_registra_cargo }}</td>
            <td>{{ incidencia.estatus }}</td>
            <td>
              <q-btn color="secondary" icon="visibility">
                <q-tooltip class="bg-secondary">Ver incidencia</q-tooltip>
              </q-btn>
              <q-btn color="secondary" icon="import_contacts" to="/sanciones-crear">
                <q-tooltip class="bg-secondary">Ver sancion</q-tooltip>
              </q-btn>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="8" class="text-center">No hay datos disponibles</td>
          </tr>
        </tbody>
      </table>

      <q-pagination
        v-if="pagination.total_pages > 1"
        v-model="page"
        :max="pagination.total_pages"
        :max-pages="5"
        boundary-numbers
        direction-links
        class="q-mt-md"
        color="primary"
        @update:model-value="loadPage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// Imports
import { ref, computed, onMounted } from 'vue';
import { IncidenciasService } from 'src/app/services/sanciones/IncidenciasService';
import { useQuasar } from 'quasar';

// Variables
const isLoading = ref(true);
const objectTetcnico = ref(false);
const service = new IncidenciasService();
const rowsPerPage = 3;
const page = ref(1);
const $q = useQuasar();
const data = ref<any[]>([]);
const pagination = ref({
  total: 0,
  per_page: 10,
  current_page: 1,
  total_pages: 1,
});

// Funciones
onMounted(async () => {
  try {
    const response = await service.getIncidencias();
    data.value = response.data;
    pagination.value = response.meta.pagination;
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.message,
    });
  } finally {
    isLoading.value = false;
  }
});

async function loadPage(pageNumber: number) {
  isLoading.value = true;
  try {
    const response = await service.getIncidencias();
    data.value = response.data;
    pagination.value = response.meta.pagination;
    page.value = pagination.value.current_page;
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: (error as Error).message,
    });
  } finally {
    isLoading.value = false;
  }
}
</script>
<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4); /* negro con transparencia */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
</style>
