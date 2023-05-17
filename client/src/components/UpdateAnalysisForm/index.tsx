import { Button, Dialog, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';

interface UpdateAnalysisFormProps {
  setOpenModal: (value: boolean) => void | Promise<void>;
  openModal: boolean;
}

const UpdateAnalysisForm = ({ setOpenModal, openModal }: UpdateAnalysisFormProps) => (
  <Dialog
    onClose={() => { setOpenModal(false); }}
    open={openModal}
  >
    <DialogTitle>
      <Typography>
        Editar amostra
      </Typography>
    </DialogTitle>
    <DialogContent sx={{ display: 'flex', flexDirection: 'column', height: 'auto' }}>
      <TextField
        required
        type='email'
          // onChange={handleChangeInput}
        sx={{ width: '520px', marginBottom: '24px' }}
        autoFocus
        label='Email'
        placeholder='Digite seu email'
        name='email'
      />
      <TextField
        required
        type='password'
        name='password'
          // value={credentials.password}
          // onChange={handleChangeInput}
        sx={{ width: '520px', marginBottom: '56px' }}
        autoFocus
          // error={erro}
          // helperText={erro ? 'Senha tem que ter mais de 6 caracteres' : ''}
        label='Senha'
        placeholder='Digite sua senha'
      />
      <Button
        type='submit'
        sx={{
          width: '520px',
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

export default UpdateAnalysisForm;
