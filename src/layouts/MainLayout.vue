<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-2">
    <!-- Header -->
    <HeaderComponent :titulo="titulo" v-if="user && centroActual" :centro="centroActual" :user="user" />

    <!-- Contenedor principal -->
    <q-page-container>
      <div class="row">
        <!-- Tarjeta PPL -->
        <div class="col-2 q-gutter-y-md q-mt-md q-pa-md" v-show="isPPL">
          <PPLCardComponent />
        </div>

        <!-- Contenedor para NavegationSpecial y BodyComponent -->
        <div :class="isPPL ? 'col-10' : 'col-12'">
          <div class="column">
            <div class="column q-gutter-y-md q-mt-md q-pa-md">
              <NavegationSpecial />
            </div>
            <div class="column q-gutter-y-md q-mt-md q-pa-md">
              <BodyComponent />
            </div>
          </div>
        </div>
      </div>
    </q-page-container>

    <!-- Footer -->
    <FooterComponent />
  </q-layout>
</template>


<script setup lang="ts">
import { ref, computed, provide } from 'vue';
import { useRoute } from 'vue-router';
import { useSessionStore } from 'stores/session';
import type { User } from 'src/entities/user/user.model';
import type { Centro } from 'src/entities/centro/centro.model';
import BodyComponent from 'src/shared/ui/layout/BodyComponent.vue';
import HeaderComponent from 'src/shared/ui/layout/HeaderComponent.vue';
import FooterComponent from 'src/shared/ui/layout/FooterComponent.vue';
import PPLCardComponent from 'src/shared/ui/layout/PPLCardComponent.vue';
import NavegationSpecial from 'src/shared/ui/layout/NavegationSpecial.vue';

const session = useSessionStore();
const route = useRoute();
const titulo = computed(() => {
  const title = route.meta.title;
  return typeof title === 'string' ? title : 'Incidencias';
});

const centroActual = computed(() => {
  if (!session.centro) {
    throw new Error('❌ No se ha cargado session.centro');
  }
  return session.centro as Centro;
});

const user = computed(() => {
  if (!session.usuario) {
    throw new Error('❌ No se ha cargado session.usuario');
  }
  return session.usuario as User;
});

const isPPL = ref(true);
const toggleFicha = () => {
  isPPL.value = !isPPL.value;
};

provide('isPPL', isPPL);
provide('toggleFicha', toggleFicha);
</script>
