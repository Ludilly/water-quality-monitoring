import { Box, CircularProgress } from '@mui/material';

const COLORS = {
  '38%': '#00000061',
};

const Loading = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      flexDirection='column'
      alignItems='center'
      paddingY={20}
    >
      <CircularProgress sx={{ color: COLORS['38%'] }} />
    </Box>
  );
};

export default Loading;