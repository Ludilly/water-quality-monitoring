import React, { useEffect, useState } from 'react';
import { Box, Button, Dialog, Grid, Icon, Select, SelectChangeEvent, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { columns, dropdownOptions } from './config';
import CustomTable from '../../components/Table';
import CustomSelect from '../../components/CustomSelect';
import CreateAnalysisForm from '../../components/CreateAnalysisForm';
import UpdateAnalysisForm from '../../components/UpdateAnalysisForm';
import { fetchAnalysis } from '../../services';

const Home = () => {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [rows, setRows] = useState<any>([]);
  const [optionValue, setOptionValue] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setOptionValue(event.target.value as string);
  };

  const handleClickOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleClickOpenUpdateModal = () => {
    setOpenUpdateModal(true);
  };

  const handleCloseModal = () => {
    setOpenCreateModal(false);
    setOpenUpdateModal(false);
  };

  useEffect(() => {
    fetchAnalysis(setRows);
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
            onClick={handleClickOpenUpdateModal}
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
            onClick={handleClickOpenCreateModal}
          >
            <Icon sx={{ display: 'flex', marginRight: '8px' }}>
              <AddIcon />
            </Icon>
            Inserir dados
          </Button>
        </Box>
      </Box>
      <CustomTable rows={rows} columns={columns} />
      {openCreateModal && <CreateAnalysisForm openModal={openCreateModal} setOpenModal={handleCloseModal} />}
      {openUpdateModal && <UpdateAnalysisForm openModal={openUpdateModal} setOpenModal={handleCloseModal} />}
    </Grid>
  );
};

export default Home;
