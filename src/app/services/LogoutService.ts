import { BaseService } from './baseService';
import { appConfig } from 'src/shared/config/app.config';

export class LogoutService extends BaseService {
  async logout(): Promise<void> {
    const result = await this.post<{ status: number }>(appConfig.logoutEndpoint);

    if (result && result.status === 200) {
      // Si la petición fue exitosa, limpiar storage
      localStorage.clear();
      sessionStorage.clear();
    } else {
      // Si la petición falló, manejar el error
      console.error('Error al cerrar sesión:', result);
    }

    // Redireccionar al login configurado
    window.location.href = appConfig.loginUrl;
  }
}
