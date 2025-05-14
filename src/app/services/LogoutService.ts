import { BaseService } from './baseService';
import { appConfig } from 'src/shared/config/app.config';

export class LogoutService extends BaseService {
  async logout(): Promise<void> {
    const result = await this.post<{ message: string }>(appConfig.logoutEndpoint);

    if (result && result.message === 'Successfully logged out') {
      // Limpiar storage local
      localStorage.clear();
      sessionStorage.clear();
    } else {
      console.error('Error al cerrar sesión:', result);
    }

    // Redireccionar al login configurado
    window.location.href = appConfig.loginUrl;
  }
}
