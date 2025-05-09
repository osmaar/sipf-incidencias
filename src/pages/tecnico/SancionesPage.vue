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
            <th class="text-left">Folio</th>
            <th class="text-left">Fecha y hora</th>
            <th class="text-left">Tipo de incidencia</th>
            <th class="text-left">Personal que custodia</th>
            <th class="text-left">Cargo del personal</th>
            <th class="text-left">Estatus de incidencia</th>
            <th class="text-left">Acciones</th>
          </tr>
        </thead>
        <tbody v-if="personas.length > 0">
          <tr v-for="(persona, index) in paginatedData" :key="index">
            <td>{{ persona.folio }}</td>
            <td>{{ persona.fecha }}</td>
            <td>{{ persona.tipoIncidencia }}</td>
            <td>{{ persona.personalCustodia }}</td>
            <td>{{ persona.cargoPersonal }}</td>
            <td>{{ persona.estatusIncidencia }}</td>
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
        v-if="pages > 1"
        v-model="page"
        :max="pages"
        :max-pages="5"
        boundary-numbers
        direction-links
        class="q-mt-md"
        color="primary"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const personas = ref([
  {
    folio: '123456',
    fecha: '2023-10-01',
    tipoIncidencia: 'Tipo 1',
    personalCustodia: 'Juan Perez',
    cargoPersonal: 'Guardia',
    estatusIncidencia: 'Pendiente',
  },
  {
    folio: '123456',
    fecha: '2023-10-01',
    tipoIncidencia: 'Tipo 1',
    personalCustodia: 'Juan Perez',
    cargoPersonal: 'Guardia',
    estatusIncidencia: 'Pendiente',
  },
  {
    folio: '123456',
    fecha: '2023-10-01',
    tipoIncidencia: 'Tipo 1',
    personalCustodia: 'Juan Perez',
    cargoPersonal: 'Guardia',
    estatusIncidencia: 'Pendiente',
  },
  {
    folio: '123456',
    fecha: '2023-10-01',
    tipoIncidencia: 'Tipo 1',
    personalCustodia: 'Juan Perez',
    cargoPersonal: 'Guardia',
    estatusIncidencia: 'Pendiente',
  },
  {
    folio: '123456',
    fecha: '2023-10-01',
    tipoIncidencia: 'Tipo 1',
    personalCustodia: 'Juan Perez',
    cargoPersonal: 'Guardia',
    estatusIncidencia: 'Pendiente',
  },
  {
    folio: '123456',
    fecha: '2023-10-01',
    tipoIncidencia: 'Tipo 1',
    personalCustodia: 'Juan Perez',
    cargoPersonal: 'Guardia',
    estatusIncidencia: 'Pendiente',
  },
]);
const isLoading = ref(true);

const rowsPerPage = 3;
const page = ref(1);

const pages = computed(() => Math.ceil(personas.value.length / rowsPerPage));

const paginatedData = computed(() => {
  const start = (page.value - 1) * rowsPerPage;
  return personas.value.slice(start, start + rowsPerPage);
});

onMounted(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Simulando una llamada a la API
  isLoading.value = false;
});
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
