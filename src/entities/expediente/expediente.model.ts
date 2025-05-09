import type { Centro } from '../centro/centro.model';

export interface Expediente {
  _type: string;
  id: number;
  persona_id: number;
  centro_id: number;
  num_expediente: string;
  consecutivo: number;
  cib: string;
  cib_si_no: string | null;
  folio_resguardo: string;
  institucion_internacional: string | null;
  abrir_procesos: number;
  readonly_biometrico: number | null;
  readonly_senia: number | null;
  readonly_info: number;
  estatus: string;
  estatus_centro: string;
  estatus_proceso: string;
  readonly: number;
  autorizacion_expediente: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  centro: Centro;
}
