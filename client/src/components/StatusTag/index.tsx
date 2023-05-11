import { Chip } from '@mui/material';

type Status = {
  status: string;
}

const StatusTag = ({ status }: Status) => {
  const COLOR_STATUS: { [key: string]: string } = {
    'Análise Aprovada': '#27AE60',
    'Análise Reprovada': '#D32F2F',
  };

  return (
    <div>
      <Chip
        label={status}
        sx={{
          fontFamily: 'Inter var',
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: '20px',
          height: '24px',
          color: '#F4F4EF',
          backgroundColor: COLOR_STATUS[status] ?? 'rgba(0, 0, 0, 0.38)',
        }}
      />
    </div>
  );
};

export default StatusTag;
