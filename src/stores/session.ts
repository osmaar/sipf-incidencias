// src/stores/session.ts
import { defineStore } from 'pinia';
import type { Persona } from 'entities/persona/persona.model';
import type { Expediente } from 'entities/expediente/expediente.model';

export const useSessionStore = defineStore('session', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    persona: null as Persona | null,
    expediente: null as Expediente | null,
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setPersona(persona: Persona) {
      this.persona = persona;
    },
    setExpediente(expediente: Expediente) {
      this.expediente = expediente;
    },
  },
});
