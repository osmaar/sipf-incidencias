<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderComponent :titulo="titulo" :centro="centroActual" :user="user" />
    <q-page-container>
      <div class="row">
        <div class="col-2" v-if="isPPL">
          <PPLCardComponent />
        </div>
        <div :class="isPPL ? 'col-10' : 'col-12'">
          <BodyComponent />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import type { User } from 'src/entities/user/user.model';
import type { Centro } from 'src/entities/centro/centro.model';
import BodyComponent from 'src/shared/ui/layout/BodyComponent.vue';
import HeaderComponent from 'src/shared/ui/layout/HeaderComponent.vue';
import PPLCardComponent from 'src/shared/ui/layout/PPLCardComponent.vue';

const route = useRoute();
const titulo = computed(() => {
  const title = route.meta.title;
  return typeof title === 'string' ? title : 'Incidencias';
});

const centroActual: Centro = {
  id: 1,
  nombre_centro: 'CEFERESO No. 1',
  codigo: 'EMX001',
  nomenclatura_centro: 'CFRS1/AJ/',
  consecutivo_inicio: 6201,
  entidad_federativa: 15,
  municipio: 5,
  tipo: 'M',
  created_at: '2024-08-14T19:40:52.000000Z',
  updated_at: null,
  deleted_at: null,
  nombre_completo: 'CENTRO FEDERAL DE REINSERCIÓN SOCIAL NÚM. 1 "ALTIPLANO"',
  numero: 1,
  entrada: 'garitas',
};

const user: User = {
  name: 'SUPER JS',
  tipo: 'SUPER ADMINISTRADOR',
  role: { name: 'SUPER ADMINISTRADOR' },
  photo: '', // opcional
};

const isPPL = ref(true);
</script>
