<script setup lang="ts">
import { IncidentTableCardView, type IncidentTableCardItem } from 'src/widgets/IncidentTable';

const items: IncidentTableCardItem[] = [
  {
    folio: 'INC/CFRS15/VC/000001/2025',
    fechaHora: '12/05/2025 16:39',
    tipoIncidencia: 'AGRESIÓN VERBAL A PPL',
    personalCustodia: 'CHANCHITO FELIZ',
    cargoPersonal: 'CARGADOR DE MASETAS',
    estatus: 'REGISTRADO',
  },
];

function onView(item: IncidentTableCardItem) {
  console.log('View', item);
}

function onPrint(item: IncidentTableCardItem) {
  console.log('Print', item);
}

function onEdit(item: IncidentTableCardItem) {
  console.log('Edit', item);
}
</script>

<template>
  <div>
    <h1 class="text-xl font-bold mb-4">Listado de Incidencias</h1>
    <IncidentTableCardView :items="items" @view="onView" @print="onPrint" @edit="onEdit" />
  </div>
</template>
