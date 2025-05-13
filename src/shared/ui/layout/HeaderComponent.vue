<template>
  <q-header elevated class="bg-topbar-sipf text-white shadow-2">
    <div class="flex h-full w-full items-center justify-between flex-wrap gap-2">
      <!-- LOGO -->
      <div class="flex items-center px-2 shrink-0 h-full">
        <q-btn flat dense round @click="refreshHome" class="logo-custom">
          <img :src="ImgLogo" alt="Logo" class="h-10 sm:h-16" />
        </q-btn>
      </div>

      <!-- CENTRO + RELOJ centrado -->
      <div class="flex items-center flex-grow justify-center h-full hidden-xs">
        <CentroRelojComponent :centro="centro" />
      </div>

      <!-- AVATAR alineado al extremo derecho -->
      <div class="flex items-center px-2 shrink-0 h-full">
        <UserAvatarMenu v-if="props.user" :user="props.user" @logout="logout" />
      </div>
    </div>
  </q-header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import ImgLogo from 'src/assets/img/logo.png';
import type { User } from 'src/entities/user/user.model';
import UserAvatarMenu from 'src/shared/ui/UserAvatarMenu.vue';
import type { Centro } from 'src/entities/centro/centro.model';
import { LogoutService } from 'src/app/services/LogoutService';
import CentroRelojComponent from 'src/shared/ui/CentroRelojComponent.vue';

const props = defineProps<{
  user?: User;
  centro: Centro;
}>();
const router = useRouter();

/**
 * Refresh the home page
 * @returns {Promise<void>}
 */
function refreshHome() {
  router.replace('/').catch((error) => {
    console.error('Error al refrescar la página de inicio:', error);
  });
}

/**
 * Logout function
 * @returns {Promise<void>}
 */
async function logout() {
  const service = new LogoutService();
  await service.logout();
}
</script>

<style scoped>
.bg-topbar-sipf {
  background-color: #1a5c50;
  height: auto;
  min-height: 70px;
  padding: 0.5rem;
}

.logo-custom {
  width: 106.29px;
}

/* Oculta el centro y reloj en pantallas pequeñas */
@media (max-width: 600px) {
  .hidden-xs {
    display: none !important;
  }
}
</style>
