<template>
  <q-card class="q-ma-md q-pa-md">
    <div class="tw-bg-emerald-900 text-center text-white">
      ID PPL:[<span class="tw-text-green-500">{{ persona?.id ?? '' }}</span
      >]
    </div>
    <q-card-section class="text-center">
      <q-avatar size="150px">
        <img :src="Avatar" />
      </q-avatar>
      <p class="q-mt-lg tw-font-semibold tw-font-stretch-150% tw-tracking-wider">
        {{ persona?.nombre_completo.toUpperCase() ?? '' }}
      </p>
      <p class="tw-font-light">{{ edad }} AÑOS DE EDAD</p>
    </q-card-section>
    <div class="tw-bg-emerald-900 text-center text-white" v-if="expediente?.centro?.tipo == 'M'">
      CENTRO (MASCULINO)
    </div>
    <div class="tw-bg-emerald-900 text-center text-white" v-else>CENTRO (FEMENIL)</div>
    <q-card-section class="text-center">
      <p class="tw-text-green-500">{{ expediente?.centro?.nombre_centro.toUpperCase() ?? '' }}</p>
      <p>TIPO DE INGRESO:</p>
      <p class="tw-text-green-500">{{ persona?.tipo_ingreso }}</p>
      <p>
        ESTATUS:
        <span class="tw-text-green-500">{{ expediente?.estatus_centro.toUpperCase() ?? '' }}</span>
      </p>
    </q-card-section>
    <div class="tw-bg-emerald-900 text-center text-white">EXPEDIENTE ACTUAL</div>
    <q-card-section class="text-center">
      <p>NÙM.</p>
      <p class="tw-text-green-500">{{ expediente?.num_expediente.toUpperCase() ?? '' }}</p>
      <p>
        ESTATUS:
        <span class="tw-text-green-500">{{ expediente?.estatus_proceso.toUpperCase() ?? '' }}</span>
      </p>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import Avatar from 'src/assets/img/avatar.jpg';
import { onMounted, ref } from 'vue';
import { useSessionStore } from 'src/stores/session';

const sessionStore = useSessionStore();
const persona = sessionStore.persona;
const expediente = sessionStore.expediente;
const edad = ref(0);

onMounted(() => {
  const hoy = new Date();
  if (persona?.fecha_nacimiento) {
    const nacimiento = new Date(persona.fecha_nacimiento);
    edad.value = hoy.getFullYear() - nacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const mesNacimiento = nacimiento.getMonth();
    const diaActual = hoy.getDate();
    const diaNacimiento = nacimiento.getDate();
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
      edad.value--;
    }
  } else {
    edad.value = 0;
  }
});
</script>
