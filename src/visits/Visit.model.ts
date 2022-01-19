export type VisitStatus = 1 | 2 | 3 | 4 | 5 | 6;

export type VisitTextStatus =
  | 'Agendado'
  | 'Em Andamento'
  | 'Aguardando Aprovação'
  | 'Finalizado'
  | 'Reagendado'
  | 'Reagendadamento Solicitado';

export interface Visit {
  s_id: number;
  client_id: number;
  unit_id: number;
  tecnico_id: string;
  vtdate: string;
  vttime: string;
  ambientes: number;
  maquinas: number;
  caracteristica: string;
  plantabaixa_image: string;
  autorizacao_image: string;
  observacao: string;
  observacao_reagendamento: string;
  responsavel: string;
  city_name: string;
  client_name: string;
  unit_name: string;
  unit_lat: string;
  unit_lon: string;
  responsavel_nome: string;
  responsavel_phone: string;
  tecnico_nome: string;
  tecnico_phone: string;
  cidade_tecnico: string;
  status_id: VisitStatus;
  status: VisitTextStatus;
  data: string;
}

