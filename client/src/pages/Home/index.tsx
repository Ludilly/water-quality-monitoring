import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Dialog, Grid, Icon, Select, SelectChangeEvent, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { columns, dropdownOptions } from './config';
import CustomTable from '../../components/Table';
import CustomSelect from '../../components/CustomSelect';
import CreateAnalysisForm from '../../components/CreateAnalysisForm';

const Home = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [rows, setRows] = useState<any>([]);
  const [optionValue, setOptionValue] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setOptionValue(event.target.value as string);
  };

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const fetchAnalysis = async () => {
    try {
      const { status, data } = await axios.get('http://localhost:8002/analysis');

      if (status === 200) setRows(data.result);

    } catch (error) {
      console.error(error);
    };
  };

  useEffect(() => {
    fetchAnalysis();
  }, []);

  return (
    <Grid sx={{ padding: '32px' }}>
      <Typography variant='h4' sx={{ fontWeight: 600, fontSize: '33px', lineHeight: '40px', marginBottom: '65px' }}>
        Tabela de amostras
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <CustomSelect optionValue={optionValue} handleChange={handleChange} options={dropdownOptions} />
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '360px' }}>
          <Button
            type='button'
            sx={{
              display: 'flex',
              width: '160px',
              textTransform: 'none',
              backgroundColor: '#94A3B8',
              color: '#f4f4f4',
              marginRight: '32px',
              height: '44px',
              "&:hover": {
                backgroundColor: '#94A3B8',
              }
            }}
          >
            <Icon sx={{ display: 'flex', marginRight: '8px' }}>
              <ModeEditIcon />
            </Icon>
            Atualizar dados
          </Button>

          <Button
            type='button'
            sx={{
              display: 'flex',
              width: '160px',
              textTransform: 'none',
              backgroundColor: '#94A3B8',
              color: '#f4f4f4',
              height: '44px',
              "&:hover": {
                backgroundColor: '#94A3B8',
              }
            }}
            onClick={handleClickOpenModal}
          >
            <Icon sx={{ display: 'flex', marginRight: '8px' }}>
              <AddIcon />
            </Icon>
            Inserir dados
          </Button>
        </Box>
      </Box>
      <CustomTable rows={rows} columns={columns} />
      {openModal && <CreateAnalysisForm openModal={openModal} setOpenModal={setOpenModal} />}
    </Grid>
  );
};

export default Home;
