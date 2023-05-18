import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  Icon,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Cookies from 'js-cookie';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'react-toastify';
import { columns, dropdownOptions } from './config';
import CustomTable from '../../components/Table';
import CustomSelect from '../../components/CustomSelect';
import CreateAnalysisForm from '../../components/CreateAnalysisForm';
import { fetchAnalysis, getAnalysisByName } from '../../services';

const Home = () => {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const [rows, setRows] = useState<any>([]);
  const [optionValue, setOptionValue] = useState<string>('');
  const navigate = useNavigate();
  const token = Cookies.get('token');
  const [tokenValue, setTokenValue] = useState(token);
  const [removeFilter, setRemoveFilter] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event: SelectChangeEvent) => {
    setOptionValue(event.target.value as string);
  };

  const handleClickOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseModal = () => {
    setOpenCreateModal(false);
  };

  useEffect(() => {
    fetchAnalysis(setRows);
  }, []);

  useEffect(() => {
    if (removeFilter) {
      fetchAnalysis(setRows);
    }
  }, [removeFilter]);

  useEffect(() => {
    getAnalysisByName(setRows, optionValue);
  }, [optionValue]);

  const logout = () => {
    if (!token) {
      setTokenValue('');
      toast.error('Você foi deslogado');
      navigate('/', { replace: true });
    }
  };

  useEffect(() => {
    logout();
  }, [tokenValue]);

  return (
    <Grid sx={{ padding: '32px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: '65px',
        }}
      >
        <Typography
          variant='h4'
          sx={{ fontWeight: 600, fontSize: '33px', lineHeight: '40px' }}
        >
          Tabela de amostras
        </Typography>
        <Button
          type='button'
          onClick={() => navigate('/', { replace: true })}
          sx={{ textTransform: 'none' }}
        >
          Sair
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
        }}
      >
        <CustomSelect
          optionValue={optionValue}
          handleChange={handleChange}
          options={dropdownOptions}
          setRemoveFilter={setRemoveFilter}
        />
        <Button
          type='button'
          sx={{
            display: 'flex',
            width: isMobile ? '100%' : '160px',
            textTransform: 'none',
            backgroundColor: '#94A3B8',
            color: '#f4f4f4',
            height: '44px',
            '&:hover': {
              backgroundColor: '#94A3B8',
            },
          }}
          onClick={handleClickOpenCreateModal}
        >
          <Icon sx={{ display: 'flex', marginRight: '8px' }}>
            <AddIcon />
          </Icon>
          Inserir dados
        </Button>
      </Box>
      <CustomTable
        rows={rows}
        columns={columns}
      />
      {openCreateModal
        && (
          <CreateAnalysisForm
            openModal={openCreateModal}
            setOpenModal={handleCloseModal}
          />
        )}
    </Grid>
  );
};

export default Home;
