import { Chip } from '@mui/material';

type Status = {
  status: string;
}

const StatusTag = ({ status }: Status) => {
  const COLOR_STATUS: { [key: string]: string } = {
    'Valor dentro da média': '#27AE60',
    'Valor acima da média': '#D32F2F',
  };

  return (
    <div>
      <Chip
        label={status}
        sx={{
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: '20px',
          height: '32px',
          color: '#F4F4EF',
          backgroundColor: COLOR_STATUS[status] ?? 'rgba(0, 0, 0, 0.38)',
        }}
      />
    </div>
  );
};

export default StatusTag;
