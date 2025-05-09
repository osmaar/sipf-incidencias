import { BaseService } from '../baseService';

export class IncidenciasService extends BaseService {
  private baseUrl = '/tecnico/seguridad/incidencias';

  async getIncidencias(): Promise<any> {
    return this.post(`${this.baseUrl}/paginate`);
  }
}
