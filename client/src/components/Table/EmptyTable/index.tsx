// import React from 'react';
import { DocumentScannerOutlined } from '@mui/icons-material';
import { Box, Icon, Typography } from '@mui/material';

const COLORS = {
  '38%': '#00000061',
  '60%': '#00000099',
};

const EmptyTable = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      flexDirection='column'
      alignItems='center'
      paddingY={20}
    >
      <Icon sx={{ width: 'auto', height: 'auto', marginBottom: 4 }}>
        <DocumentScannerOutlined sx={{ height: '66px', width: '60px', color: COLORS['38%'] }} />
      </Icon>
      <Typography variant='h6' color={COLORS['60%']}>
        Está tudo vazio por aqui...
      </Typography>
      <Typography color={COLORS['60%']}>
        Não há amostra registrada.
      </Typography>
    </Box>
  );
};

export default EmptyTable;

