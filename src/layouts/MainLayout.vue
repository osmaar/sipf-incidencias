<template>
  <q-layout view="lHh lpR fFf">
    <HeaderComponent :titulo="titulo" />
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
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import HeaderComponent from 'src/shared/ui/layout/HeaderComponent.vue';
import PPLCardComponent from 'src/shared/ui/layout/PPLCardComponent.vue';
import BodyComponent from 'src/shared/ui/layout/BodyComponent.vue';
import { ref } from 'vue';

const route = useRoute();
const titulo = computed(() => {
  const title = route.meta.title;
  return typeof title === 'string' ? title : 'Home';
});

const isPPL = ref(true);
</script>
<style scoped></style>
