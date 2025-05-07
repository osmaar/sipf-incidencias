<template>
  <q-card class="q-ma-md q-pa-md">
    <div class="tw-bg-emerald-900 text-center text-white">
      ID PPL:[<span class="tw-text-green-500">997</span>]
    </div>
    <q-card-section class="text-center">
      <q-avatar size="150px">
        <img :src="Avatar" />
      </q-avatar>
      <p class="q-mt-lg tw-font-semibold tw-font-stretch-150% tw-tracking-wider">Nombre de PPL</p>
      <p class="tw-font-light">29 anios de edad</p>
    </q-card-section>
    <div class="tw-bg-emerald-900 text-center text-white">Centro (masculino)</div>
    <q-card-section class="text-center">
      <p class="tw-text-green-500">CEFERESO No. 14</p>
      <p>Tipo de Ingreso:</p>
      <p class="tw-text-green-500">NUEVO INGRESO</p>
      <p>Estatus: <span class="tw-text-green-500">INGRESO</span></p>
    </q-card-section>
    <div class="tw-bg-emerald-900 text-center text-white">Expediente actual</div>
    <q-card-section class="text-center">
      <p>Núm.</p>
      <p class="tw-text-green-500">CFRS14/GP/006902/2025</p>
      <p>Estatus: <span class="tw-text-green-500">IMPUTADO</span></p>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import Avatar from 'src/assets/img/avatar.jpg';
</script>
