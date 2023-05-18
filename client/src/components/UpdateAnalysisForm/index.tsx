import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { SampleData } from '../../interfaces/samples';
import { getAnalysisById, updateAnalysis } from '../../services';
import { AgentsNames } from '../../enums';

interface UpdateAnalysisFormProps {
  setOpenModal: (value: boolean) => void | Promise<void>;
  openModal: boolean;
  sampleId: string;
}

const UpdateAnalysisForm = ({ setOpenModal, openModal, sampleId }: UpdateAnalysisFormProps) => {
  const [sampleData, setSampleData] = useState<SampleData | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    getAnalysisById(sampleId, setSampleData);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSampleData((prevSampleData) => ({
      ...(prevSampleData as SampleData),
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    const formattedAgentName = Object.keys(AgentsNames).find(
      (key) => AgentsNames[key as keyof typeof AgentsNames] === sampleData?.agente,
    );
    const data = {
      ...sampleData!,
      valor: Number(sampleData!.valor),
      agente: formattedAgentName || sampleData!.agente,
    };

    await updateAnalysis(data, sampleId).then(() => {
      setOpenModal(false);
    });
  };

  return (
    <Dialog onClose={() => setOpenModal(false)} open={openModal}>
      <DialogTitle>
        <Typography
          sx={{
            fontSize: '19px',
            fontWeight: 600,
            lineHeight: '29px',
            marginTop: '10px',
          }}
        >
          Editar amostra
        </Typography>
      </DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
        }}
      >
        <TextField
          required
          type='text'
          onChange={handleChange}
          sx={{ width: isMobile ? '300px' : '520px', marginBottom: '24px', marginTop: '10px' }}
          autoFocus
          value={AgentsNames[sampleData?.agente as keyof typeof AgentsNames]}
          name='agente'
        />
        <TextField
          required
          type='text'
          name='pontoDeColeta'
          value={sampleData?.pontoDeColeta}
          onChange={handleChange}
          sx={{ width: isMobile ? '300px' : '520px', marginBottom: '24px' }}
        />
        <TextField
          required
          type='text'
          name='cidade'
          value={sampleData?.cidade}
          onChange={handleChange}
          sx={{ width: isMobile ? '300px' : '520px', marginBottom: '24px' }}
        />
        <TextField
          required
          type='text'
          name='estado'
          value={sampleData?.estado}
          onChange={handleChange}
          sx={{ width: isMobile ? '300px' : '520px', marginBottom: '24px' }}
        />
        <TextField
          required
          type='text'
          name='valor'
          value={sampleData?.valor}
          onChange={handleChange}
          sx={{ width: isMobile ? '300px' : '520px', marginBottom: '24px' }}
        />
        <Button
          type='button'
          onClick={handleUpdate}
          sx={{
            width: isMobile ? '300px' : '520px',
            textTransform: 'none',
            backgroundColor: '#94A3B8',
            color: '#f4f4f4',
            height: '54px',
            '&:hover': {
              backgroundColor: '#94A3B8',
            },
          }}
        >
          Enviar
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateAnalysisForm;
