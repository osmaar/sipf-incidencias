// src/stores/session.ts
import { defineStore } from 'pinia';
import type { Centro } from 'entities/centro/centro.model';
import type { Persona } from 'entities/persona/persona.model';
import type { User, Permisos } from 'entities/user/user.model';
import type { Expediente } from 'entities/expediente/expediente.model';

export const useSessionStore = defineStore('session', {
  state: () => ({
    token: null as string | null,
    usuario: null as User | null,
    centro: null as Centro | null,
    persona: null as Persona | null,
    permisos: null as Permisos | null,
    expediente: null as Expediente | null,
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
      localStorage.setItem('AUTH_TOKEN', token);
    },
    setPersona(persona: Persona) {
      this.persona = persona;
      localStorage.setItem('PERSONA', JSON.stringify(persona));
    },
    setExpediente(expediente: Expediente) {
      this.expediente = expediente;
      localStorage.setItem('EXPEDIENTE', JSON.stringify(expediente));
    },
    setUsuario(usuario: User) {
      this.usuario = usuario;
      localStorage.setItem('USUARIO', JSON.stringify(usuario));
    },
    setPermisos(permisos: string[]) {
      this.permisos = permisos;
      localStorage.setItem('PERMISOS', JSON.stringify(permisos));
    },
    setCentro(centro: Centro) {
      this.centro = centro;
      localStorage.setItem('CENTRO', JSON.stringify(centro));
    },

    loadFromStorage() {
      const centro = localStorage.getItem('CENTRO');
      const persona = localStorage.getItem('PERSONA');
      const usuario = localStorage.getItem('USUARIO');
      const token = localStorage.getItem('AUTH_TOKEN');
      const permisos = localStorage.getItem('PERMISOS');
      const expediente = localStorage.getItem('EXPEDIENTE');

      if (token) this.setToken(token);
      if (centro) this.setCentro(JSON.parse(centro));
      if (persona) this.setPersona(JSON.parse(persona));
      if (usuario) this.setUsuario(JSON.parse(usuario));
      if (permisos) this.setPermisos(JSON.parse(permisos));
      if (expediente) this.setExpediente(JSON.parse(expediente));
    },
  },
});
