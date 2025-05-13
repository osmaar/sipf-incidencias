<template>
  <router-view />
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useSessionStore } from 'stores/session';

const session = useSessionStore();

onBeforeMount(() => {
  const params = new URLSearchParams(window.location.search);
  const tokenParam = params.get('token');
  const personaParam = params.get('persona')
    ? JSON.parse(decodeURIComponent(params.get('persona')!))
    : null;
  const expedienteParam = params.get('expediente')
    ? JSON.parse(decodeURIComponent(params.get('expediente')!))
    : null;
  const usuarioParam = params.get('usuario')
    ? JSON.parse(decodeURIComponent(params.get('usuario')!))
    : null;
  const permisosParam = params.get('permisos')
    ? JSON.parse(decodeURIComponent(params.get('permisos')!))
    : null
  const centroParam = params.get('centro')
    ? JSON.parse(decodeURIComponent(params.get('centro')!))
    : null;

  // Carga desde .env si no vienen por URL
  const token = tokenParam || import.meta.env.VITE_AUTH_TOKEN;
  let persona = personaParam;
  let expediente = expedienteParam;
  let usuario = usuarioParam;
  let permisos = permisosParam;
  let centro = centroParam;

  try {
    if (!centro && import.meta.env.VITE_CENTRO) {
      centro = JSON.parse(import.meta.env.VITE_CENTRO);

    }
  } catch (err) {
    console.error('❌ Error al parsear VITE_CENTRO', err);
  }

  try {
    if (!persona && import.meta.env.VITE_PERSONA) {
      persona = JSON.parse(import.meta.env.VITE_PERSONA);
    }
  } catch (err) {
    console.error('❌ Error al parsear VITE_PERSONA', err);
  }

  try {
    if (!expediente && import.meta.env.VITE_EXPEDIENTE) {
      expediente = JSON.parse(import.meta.env.VITE_EXPEDIENTE);
    }
  } catch (err) {
    console.error('❌ Error al parsear VITE_EXPEDIENTE', err);
  }

  try {
    if (!usuario && import.meta.env.VITE_USUARIO) {
      usuario = JSON.parse(import.meta.env.VITE_USUARIO);
    }
  } catch (err) {
    console.error('❌ Error al parsear VITE_USUARIO', err, import.meta.env.VITE_USUARIO);
  }

  try {
    if (!permisos && import.meta.env.VITE_PERMISOS) {
      permisos = permisosParam || JSON.parse(import.meta.env.VITE_PERMISOS || '[]');
    }
  } catch (err) {
    console.error('❌ Error al parsear VITE_PERMISOS', err, import.meta.env.VITE_PERMISOS);
  }

  if (token) session.setToken(token);
  if (centro) session.setCentro(centro);
  if (persona) session.setPersona(persona);
  if (usuario) session.setUsuario(usuario);
  if (permisos?.length) session.setPermisos(permisos);
  if (expediente) session.setExpediente(expediente);

});
</script>
