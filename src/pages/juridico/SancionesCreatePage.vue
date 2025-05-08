<template>
  <div v-if="isLoading" class="loading-overlay">
    <q-spinner-gears color="primary" size="10em" />
  </div>
  <div class="row">
    <div class="col-12">
      <p class="text-xl text-center">SANCION</p>
      <q-btn
        class="q-mt-md"
        color="primary"
        label="Crear Sanción"
        to="/sanciones-crear"
        icon="add"
      />
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <q-stepper v-model="step" vertical color="primary" animated>
        <q-step :name="1" title="OPCIONES DE SANCION" icon="settings" :done="step > 1">
          <q-card>
            <q-card-header>
              <q-toolbar-title class="text-h6 text-center bg-primary text-white"
                >Sanción</q-toolbar-title
              >
            </q-card-header>
            <q-card-section class="q-pa-md">
              <q-btn class="q-mx-lg" color="primary" label="Ver sancion" icon="visibility" />
              <q-btn class="q-mx-lg" color="primary" label="Ver documento" icon="description" />
            </q-card-section>
          </q-card>

          <q-stepper-navigation>
            <q-btn @click="step = 2" color="primary" label="Continuar" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="OPCIONES CONTROVERSIA"
          caption="Optional"
          icon="create_new_folder"
          :done="step > 2"
        >
          <q-card>
            <q-card-header>
              <q-toolbar-title class="text-h6 text-center bg-primary text-white"
                >CONTROVERSIA</q-toolbar-title
              >
            </q-card-header>
            <q-card-section class="q-pa-md">
              <q-btn class="q-mx-lg" color="primary" label="Ver sancion" icon="visibility" />
              <q-btn class="q-mx-lg" color="primary" label="Ver documento" icon="description" />
            </q-card-section>
          </q-card>

          <q-stepper-navigation>
            <q-btn @click="step = 4" color="primary" label="Continuar" />
            <q-btn flat @click="step = 1" color="primary" label="Ver anterior" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>

        <q-step :name="4" title="OPCIONES APELACION" icon="add_comment">
          <q-card>
            <q-card-header>
              <q-toolbar-title class="text-h6 text-center bg-primary text-white"
                >APELACION</q-toolbar-title
              >
            </q-card-header>
            <q-card-section class="q-pa-md">
              <q-btn class="q-mx-lg" color="primary" label="Ver sancion" icon="visibility" />
              <q-btn class="q-mx-lg" color="primary" label="Ver documento" icon="description" />
            </q-card-section>
          </q-card>

          <q-stepper-navigation>
            <q-btn @click="step = 5" color="primary" label="Continuar" />
            <q-btn flat @click="step = 2" color="primary" label="Ver anterior" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>
        <q-step :name="5" title="OPCIONES AMPARO" icon="add_comment">
          <q-card>
            <q-card-header>
              <q-toolbar-title class="text-h6 text-center bg-primary text-white"
                >AMPARO</q-toolbar-title
              >
            </q-card-header>
            <q-card-section class="q-pa-md">
              <q-btn class="q-mx-lg" color="primary" label="Ver sancion" icon="visibility" />
              <q-btn class="q-mx-lg" color="primary" label="Ver documento" icon="description" />
            </q-card-section>
          </q-card>

          <q-stepper-navigation>
            <q-btn color="primary" label="Finalizar" />
            <q-btn flat @click="step = 4" color="primary" label="Ver anterior" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const step = ref(1);
</script>
<style scoped></style>
