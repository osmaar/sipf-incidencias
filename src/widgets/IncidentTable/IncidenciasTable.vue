<template>
  <div class="space-y-4">
    <div v-for="item in items" :key="item.folio"
      class="flex flex-col md:flex-row md:items-center justify-between rounded-2xl shadow-md p-4 bg-white space-y-2 md:space-y-0 md:space-x-4">
      <div>
        <div class="font-semibold text-sm text-gray-600">Folio</div>
        <div class="text-gray-900">{{ item.folio }}</div>
      </div>

      <div>
        <div class="font-semibold text-sm text-gray-600">Fecha y Hora</div>
        <div class="text-gray-900">{{ item.fechaHora }}</div>
      </div>

      <div>
        <div class="font-semibold text-sm text-gray-600">Tipo de Incidencia</div>
        <div class="text-gray-900">{{ item.tipoIncidencia }}</div>
      </div>

      <div>
        <div class="font-semibold text-sm text-gray-600">Custodia</div>
        <div class="text-gray-900">{{ item.personalCustodia }}</div>
      </div>

      <div>
        <div class="font-semibold text-sm text-gray-600">Cargo</div>
        <div class="text-gray-900">{{ item.cargoPersonal }}</div>
      </div>

      <div>
        <div class="font-semibold text-sm text-gray-600">Estatus</div>
        <q-badge color="primary" outline>{{ item.estatus }}</q-badge>
      </div>

      <div class="flex space-x-2">
        <q-btn flat icon="visibility" color="primary" @click="$emit('view', item)" />
        <q-btn flat icon="print" color="primary" @click="$emit('print', item)" />
        <q-btn flat icon="edit" color="primary" @click="$emit('edit', item)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IncidentTableCardItem } from './types';

defineProps<{
  items: IncidentTableCardItem[];
}>();

defineEmits(['view', 'print', 'edit']);
</script>
