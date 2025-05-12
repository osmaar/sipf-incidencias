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

  async get<T>(url: string, params?: Record<string, unknown>): Promise<T | null> {
    try {
      const response = await this.api.get<T>(url, { params });
      return response.data;
    } catch (error: unknown) {
      this.handleError(error);
      return null;
    }
  }

  async post<T, D = unknown>(url: string, data?: D): Promise<T | null> {
    try {
      const response = await this.api.post<T>(url, data);
      return response.data;
    } catch (error: unknown) {
      this.handleError(error);
      return null;
    }
  }

  async put<T, D = unknown>(url: string, data?: D): Promise<T | null> {
    try {
      const response = await this.api.put<T>(url, data);
      return response.data;
    } catch (error: unknown) {
      this.handleError(error);
      return null;
    }
  }

  async delete<T>(url: string): Promise<T | null> {
    try {
      const response = await this.api.delete<T>(url);
      return response.data;
    } catch (error: unknown) {
      this.handleError(error);
      return null;
    }
  }

  private handleError(error: unknown) {
    if (error instanceof Error) {
      console.error('API Error:', error.message);
    } else {
      console.error('API Error:', error);
    }
    console.error('API Error:', error);
    const message =
      (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
      'Error en la petición';
    Notify.create({
      type: 'negative',
      message,
    });
  }
}
