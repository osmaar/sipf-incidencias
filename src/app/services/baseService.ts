import { api } from 'boot/axios';
import { Notify } from 'quasar';
import { useSessionStore } from 'stores/session';

export class BaseService {
  protected api = api;
  protected session = useSessionStore();

  constructor() {
    this.setAuthHeader();
  }

  private setAuthHeader() {
    const token = this.session.token;
    if (token) {
      this.api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }

  async get<T>(url: string, params?: any): Promise<T | null> {
    try {
      const response = await this.api.get<T>(url, { params });
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      return null;
    }
  }

  async post<T>(url: string, data?: any): Promise<T | null> {
    try {
      const response = await this.api.post<T>(url, data);
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      return null;
    }
  }

  async put<T>(url: string, data?: any): Promise<T | null> {
    try {
      const response = await this.api.put<T>(url, data);
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      return null;
    }
  }

  async delete<T>(url: string): Promise<T | null> {
    try {
      const response = await this.api.delete<T>(url);
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      return null;
    }
  }

  private handleError(error: any) {
    console.error('API Error:', error);
    const message = error?.response?.data?.message || 'Error en la petición';
    Notify.create({
      type: 'negative',
      message,
    });
  }
}
