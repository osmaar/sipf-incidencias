const currentEnv = import.meta.env.VITE_APP_ENV ?? 'LOCAL';

export const appConfig = {
  frontendUrl: import.meta.env[`VITE_APP_FRONTEND_${currentEnv}`],
  apiUrl: import.meta.env[`VITE_APP_API_URL_${currentEnv}`],
  storageUrl: import.meta.env[`VITE_API_STORAGE_URL_${currentEnv}`],
  sancionesUrl: import.meta.env[`VITE_APP_SANCIONES_URL_${currentEnv}`],
  loginUrl: import.meta.env[`VITE_APP_FRONTEND_LOGIN_URL_${currentEnv}`],
  logoutEndpoint: import.meta.env[`VITE_APP_API_URL_${currentEnv}`] + '/logout',
};
