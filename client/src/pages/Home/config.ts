export const columns = [
  {
    id: 'agentes',
    label: 'Agentes',
    minWidth: 80,
    borderRadius: '8px 0px 0px 0px',
  },
  {
    id: 'pontoDeColeta',
    label: 'Ponto de Coleta',
    minWidth: 120,
  },
  {
    id: 'cidade',
    label: 'Cidade',
    minWidth: 100,
  },
  {
    id: 'estado',
    label: 'Estado',
    minWidth: 100,
  },
  {
    id: 'valor',
    label: 'Valor da amostra coletada',
    minWidth: 120,
  },
  {
    id: 'limiteMaximo',
    label: 'Valor máximo permitido por lei',
    minWidth: 120,
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 120,
    borderRadius: '0px 8px 0px 0px',
  },
];

export const dropdownOptions = [
  { value: ' ALUMINIO_DISSOLVIDO', label: 'Alumínio' },
  { value: 'ARSENIO_TOTAL', label: 'Arsênio' },
  { value: 'CHUMBO_TOTAL', label: 'Chumbo' },
  { value: 'COBRE_DISSOLVIDO', label: 'Cobre' },
  { value: 'ESCHERICHIA_COLI', label: 'Escherichia coli' },
  { value: 'CROMO_TOTAL', label: 'Cromo' },
  { value: 'CADMIO_TOTAL', label: 'Cadmio' },
  { value: 'DBO', label: 'DBO' },
];
