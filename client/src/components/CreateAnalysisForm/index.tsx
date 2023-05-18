import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
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
import { CreateAnalysisFormProps } from '../../interfaces/components';
import { SampleData } from '../../interfaces/samples';
import { createAnalysis } from '../../services';
import { AgentsNames } from '../../enums';

const CreateAnalysisForm = ({
  setOpenModal,
  openModal,
}: CreateAnalysisFormProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [sampleData, setSampleData] = useState<SampleData | null>({
    agente: '',
    pontoDeColeta: '',
    cidade: '',
    estado: '',
    valor: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSampleData((prevSampleData) => ({
      ...(prevSampleData as SampleData),
      [name]: value,
    }));
  };

  const handleCreate = async () => {
    if (
      !sampleData?.agente
      || !sampleData?.cidade
      || !sampleData?.estado
      || !sampleData?.pontoDeColeta
      || !sampleData?.valor
    ) {
      toast.error('Campos não podem estar vazios');
      return;
    }

    const formattedAgentName = Object.keys(AgentsNames).find(
      (key) => AgentsNames[key as keyof typeof AgentsNames] === sampleData?.agente,
    );

    const data = {
      ...sampleData,
      valor: Number(sampleData.valor),
      agente: formattedAgentName || sampleData.agente,
    };

    await createAnalysis(data).then(() => {
      setOpenModal(false);
    });
  };

  return (
    <Dialog
      onClose={() => { setOpenModal(false); }}
      open={openModal}
    >
      <DialogTitle>
        <Typography
          sx={{
            fontSize: '19px',
            fontWeight: 600,
            lineHeight: '29px',
            marginTop: '10px',
          }}
        >
          Adicionar amostra
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', height: 'auto' }}>
        <TextField
          required
          type='text'
          onChange={handleChange}
          sx={{ width: isMobile ? '300px' : '520px', marginBottom: '24px' }}
          autoFocus
          label='Agente'
          placeholder='Digite o agente'
          name='agente'
          value={sampleData?.agente}
        />
        <TextField
          required
          type='text'
          name='pontoDeColeta'
          value={sampleData?.pontoDeColeta}
          onChange={handleChange}
          sx={{ width: isMobile ? '300px' : '520px', marginBottom: '24px' }}
          autoFocus
          label='Ponto de Coleta'
          placeholder='Digite o ponto de coleta'
        />
        <TextField
          required
          type='text'
          name='cidade'
          value={sampleData?.cidade}
          onChange={handleChange}
          sx={{ width: isMobile ? '300px' : '520px', marginBottom: '24px' }}
          autoFocus
          label='Cidade'
          placeholder='Digite o nome da cidade'
        />
        <TextField
          required
          type='text'
          name='estado'
          value={sampleData?.estado}
          onChange={handleChange}
          sx={{ width: isMobile ? '300px' : '520px', marginBottom: '24px' }}
          autoFocus
          label='Estado'
          placeholder='Digite o a UF do estado'
        />
        <TextField
          required
          type='text'
          name='valor'
          value={sampleData?.valor}
          onChange={handleChange}
          sx={{ width: isMobile ? '300px' : '520px', marginBottom: '24px' }}
          autoFocus
          label='Valor da amostra'
          placeholder='Digite o valor da amostra coletada'
        />
        <Button
          type='button'
          onClick={handleCreate}
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

export default CreateAnalysisForm;
