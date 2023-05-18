import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Option } from '../../interfaces/components';

interface CustomSelectProps {
  options: Option[];
  handleChange: (event: SelectChangeEvent) => void;
  optionValue: string;
  setRemoveFilter: (removeFilter: any) => void;
}

const CustomSelect = ({
  options,
  handleChange,
  optionValue,
  setRemoveFilter,
}: CustomSelectProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{ minWidth: 120, display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
      <FormControl fullWidth>
        <InputLabel id='filter-select-label'>Filtros</InputLabel>
        <Select
          sx={{ width: isMobile ? '100%' : '320px' }}
          labelId='filter-select-label'
          id='filter-simple-select'
          value={optionValue}
          label='Filtros'
          onChange={handleChange}
        >
          {options!.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        type='button'
        onClick={() => setRemoveFilter(true)}
        sx={{
          textTransform: 'none',
          width: '150px',
          display: isMobile ? 'flex' : null,
          justifyContent: isMobile ? 'flex-start' : null,
        }}
      >
        Limpar Filtros
      </Button>
    </Box>
  );
};

export default CustomSelect;
