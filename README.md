# Microfrontend SIPF Incidencias

Aplicación SPA construida con [Quasar Framework](https://quasar.dev/) y Vite, usando TypeScript. Esta aplicación implementa **Feature-Sliced Design** como arquitectura para microfrontends. Más información: [Feature-Sliced Design](https://medium.com/@dtgasparyan/feature-sliced-design-the-ideal-frontend-architecture-84d701ad44ba).

---

## 🧩 Estructura de Carpetas

```
src/
├── app/                 # Módulos de configuración como router, main.ts, etc.
│   └── router/          # Definición de rutas (Vue Router)
├── assets/              # Archivos estáticos como imágenes o fuentes
├── boot/                # Archivos boot para inicializar plugins (ej. axios.ts)
├── components/          # Componentes reutilizables
├── css/                 # Archivos de estilos globales
├── entities/            # Modelos y transformadores de datos
│   └── sancion/         # Ejemplo: sancion.model.ts, sancion.repository.ts
├── features/            # Páginas o módulos funcionales (siguiendo FSD)
│   └── sanciones/       # Submódulos: create, edit, show
├── layouts/             # Layouts globales (ej. MainLayout.vue)
├── pages/               # Páginas principales por módulo (ej. tecnico/)
├── shared/              # Código compartido (validators, utils, etc.)
│   ├── config/          # Configuración genérica
│   ├── lib/             # Funciones utilitarias (ej. validators.ts)
│   └── ui/              # Componentes UI comunes (ej. BaseButton.vue)
├── stores/              # Pinia stores
├── widgets/             # Componentes complejos (ej. tablas con lógica propia)
├── App.vue              # Root component
├── env.d.ts             # Declaraciones de tipo para variables de entorno
└── main.ts              # Entrada de la app
```

---

## 🚀 Instalación

```bash
yarn
# o
npm install
```

---

## 🧪 Desarrollo

```bash
quasar dev
```

Esto compilará la app en modo SPA (`quasar.config.ts`) y abrirá el navegador en `http://localhost:9000`.

---

## 📦 Build Producción

```bash
quasar build
```

Los archivos resultantes estarán en `dist/spa`.

---

## 🧼 Linter y Formato

### Lint

```bash
yarn lint
# o
npm run lint
```

### Format

```bash
yarn format
# o
npm run format
```

---

## ⚙️ Configuración Personalizada

La configuración principal está en:

- `quasar.config.ts`: configuración de build, boot files, alias, etc.
- `tsconfig.json`: configuración de TypeScript, incluyendo `paths` personalizados
- `src/boot/axios.ts`: configuración global de axios
- `src/app/router/`: rutas principales

Además:

- Se creó la directiva `v-permiso="'modulo.accion'"` para protección por permisos.
- En rutas se agregó el atributo `permisos` en `meta` para protección basada en roles.
- Se cuenta con detección automática del ambiente (LOCAL, TEST, QA, PROD) mediante variables `VITE_APP_ENV`.

---

## 🔐 Información precargada en Pinia

Ya están disponibles desde el arranque:

- Centro (`CENTRO`)
- Persona (`PERSONA`)
- Expediente (`EXPEDIENTE`)
- Usuario logeado (`USUARIO`)
- Permisos (`PERMISOS`)
- Token de autenticación (`AUTH_TOKEN`)

Todo esto se carga desde variables de entorno(LOCAL) o el LocalStorage.

---

## 🧱 Plantilla base (RAMA `master`)

La rama `master` se considera **cascarón base** del microfrontend (`VUE`), con todo lo necesario para comenzar un nuevo módulo,
asi tambien se considera la plantilla base para otros Frontend (ej. `REACT`, `ANGULAR` o `SVELT` ):

- Estructura basada en Feature-Sliced Design
- Directiva de permisos global
- Carga de datos inicial desde Pinia
- Rutas protegidas por permisos
- CRUD centralizado en un servicio base para reutilización de lógica de datos
- Estructura modularizada lista para añadir páginas y rutas nuevas

---

## 📘 Documentación Quasar

- [Boot Files](https://v2.quasar.dev/quasar-cli-vite/boot-files)
- [Routing](https://v2.quasar.dev/quasar-cli-vite/vue-router)
- [Store (Pinia)](https://pinia.vuejs.org/)
- [Quasar CLI Vite Mode](https://v2.quasar.dev/quasar-cli-vite/)

---

## 🧠 Notas adicionales

- Este proyecto usa `@quasar/app-vite` versión `2.2.0`.
- Para evitar errores con imports, asegúrate que los alias estén definidos correctamente en `quasar.config.ts` y `tsconfig.json`.
