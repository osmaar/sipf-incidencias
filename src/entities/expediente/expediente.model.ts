export interface Expediente {
  _type: string;
  id: number;
  persona_id: number;
  centro_id: number;
  num_expediente: string;
  cib: string;
  tipo_ingreso: number;
  tipo_ingreso_desc: number;
  procedencia_pais: number;
  procedencia_centro: number;
  procedencia_estado: number;
  fiscalia: string;
  fecha_ingreso: string;
  hora_ingreso: string;
  is_read_only: number;
  status: number;
}
