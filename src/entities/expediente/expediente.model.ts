export interface Expediente {
  id: number;
  persona_id: number;
  centro_id: number;
  num_expediente: string;
  consecutivo: number;
  cib: string;
  cib_si_no: boolean | null;
  folio_resguardo: string | null;
  institucion_internacional: string | null;
  abrir_procesos: number;
  readonly_biometrico: boolean | null;
  readonly_senia: number;
  readonly_info: boolean | null;
  estatus: string;
  estatus_centro: string;
  estatus_proceso: string | null;
  readonly: number;
  autorizacion_expediente: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  centro: Centro;
  egreso_temporal?: { id?: number; descripcion?: string }[] | null;
  traslado?: { id?: number; descripcion?: string }[] | null;
  movimientos: Movimiento[];
  proceso: Proceso;
}

export interface Centro {
  id: number;
  nombre_centro: string;
  codigo: string;
  nomenclatura_centro: string;
  consecutivo_inicio: number;
  entidad_federativa: number;
  municipio: number;
  tipo: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  nombre_completo: string;
  numero: number;
  entrada: string;
}

export interface Movimiento {
  id: number;
  expediente_id: number;
  tipo_ingreso: number;
  es_nuevo_ingreso: number;
  tipo_ingreso_desc: number;
  procedencia_pais: string | null;
  institucion_internacional: string | null;
  folio_resguardo: string | null;
  procedencia_centro: string | null;
  procedencia_estado: string | null;
  fiscalia: string | null;
  fecha_ingreso: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  circuito: string | null;
  autoridad_judicial: string | null;
  centro_destino: string;
  fuero: string | null;
  autoridad_judicial_otro: string | null;
  circuito_estado_id: number | null;
}

export interface Proceso {
  id: number;
}
