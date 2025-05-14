import { boot } from 'quasar/wrappers';

import axios, { type AxiosInstance } from 'axios';

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

const ambiente = import.meta.env.VITE_APP_ENV;

let baseURL: string = '';

switch (ambiente) {
  case 'LOCAL':
    baseURL = import.meta.env.VITE_APP_API_URL_LOCAL;
    break;
  case 'TEST':
    baseURL = import.meta.env.VITE_APP_API_URL_TEST;
    break;
  case 'QA':
    baseURL = import.meta.env.VITE_APP_API_URL_QA;
    break;
  case 'PROD':
    baseURL = import.meta.env.VITE_APP_API_URL_PROD;
    break;
  default:
    console.warn('Ambiente no reconocido, usando URL base por defecto.');
    baseURL = import.meta.env.VITE_APP_API_URL_TEST;
}

const api = axios.create({ baseURL });

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
