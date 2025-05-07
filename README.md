# Módulo – SIPF Sanciones e Incidencias

Aplicación SPA construida con [Quasar Framework](https://quasar.dev/) y Vite, usando TypeScript. Esta aplicación administra el módulo de sanciones del sistema SIPF.

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
├── features/            # Páginas o módulos funcionales
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

---

## ✅ Convenciones

- Usa `boot/` para inicializar servicios como Axios, Auth o i18n.
- Coloca los modelos y lógica de acceso a datos en `entities/`.
- Implementa cada módulo funcional como carpeta dentro de `features/`.
- Usa `shared/lib/` para validaciones, helpers y funciones comunes.
- Coloca los `Pinia stores` en `stores/`, uno por entidad o módulo.
- Usa `widgets/` para componentes grandes con lógica específica.

---

## 📘 Documentación Quasar

- [Boot Files](https://v2.quasar.dev/quasar-cli-vite/boot-files)
- [Routing](https://v2.quasar.dev/quasar-cli-vite/vue-router)
- [Store (Pinia)](https://pinia.vuejs.org/)
- [Quasar CLI Vite Mode](https://v2.quasar.dev/quasar-cli-vite/)

---

## 🧠 Notas adicionales

- Este proyecto usa `@quasar/app-vite` versión `2.2.0`.
- Para evitar errores con imports, revisa que los **alias estén definidos** en `quasar.config.ts` y `tsconfig.json`.
