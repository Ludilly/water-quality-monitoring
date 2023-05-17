import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Option } from '../../interfaces';

interface CustomSelectProps {
  options: Option[];
  handleChange: (event: SelectChangeEvent) => void;
  optionValue: string;
}

const CustomSelect = ({ options, handleChange, optionValue }: CustomSelectProps) => (
  <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id='filter-select-label'>Filtros</InputLabel>
      <Select
        sx={{ width: '320px' }}
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
  </Box>
);

export default CustomSelect;
