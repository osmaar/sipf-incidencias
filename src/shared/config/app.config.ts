const currentEnv = import.meta.env.VITE_APP_ENV ?? 'LOCAL';

function getEnvVar(key: string): string {
  const value = import.meta.env[key];
  if (!value) {
    console.error(`⚠️ No se encontró la variable de entorno: ${key}`);
  }
  return value ?? '';
}

export const appConfig = {
  frontendUrl: getEnvVar(`VITE_APP_FRONTEND_${currentEnv}`),
  apiUrl: getEnvVar(`VITE_APP_API_URL_${currentEnv}`),
  storageUrl: getEnvVar(`VITE_API_STORAGE_URL_${currentEnv}`),
  loginUrl: getEnvVar(`VITE_APP_FRONTEND_LOGIN_URL_${currentEnv}`) + '/sipf/account/login',
  logoutEndpoint: getEnvVar(`VITE_APP_API_URL_${currentEnv}`) + '/logout',
};
