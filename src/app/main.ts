// src/main.ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '../App.vue';
import router from './router';
import { useSessionStore } from '../stores/session'; // Crea un store para manejar la sesión

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

const sessionStore = useSessionStore();

const token = localStorage.getItem('AUTH_TOKEN');
const persona = localStorage.getItem('PERSONA');
const expediente = localStorage.getItem('EXPEDIENTE');

if (token) {
  sessionStore.setToken(token);
}

if (persona) {
  sessionStore.setPersona(JSON.parse(persona));
}

if (expediente) {
  sessionStore.setExpediente(JSON.parse(expediente));
}

app.mount('#app');
