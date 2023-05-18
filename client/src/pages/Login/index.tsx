import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import moment from 'moment';
import { useMediaQuery, Box, Button, Grid, TextField, Typography, useTheme } from '@mui/material';
import Loading from '../../components/Loading';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(false);
  const navigate = useNavigate();
  const NUMBER_OF_CHARACTERS = 6;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (credentials.password.length <= NUMBER_OF_CHARACTERS) {
      setErro(true);
    } else {
      setErro(false);
    }
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { status, data } = await axios.post('http://localhost:3005/login', credentials);
      console.log(data);
      if (status === 200) {
        Cookie.set('token', encodeURIComponent(data.token), {
          expires: moment().add(24, 'hours').toDate(),
        });
        toast.success('Você está logado!');
        navigate('/home');
      }
      setLoading(false);
    } catch (err) {
      toast.error('Credenciais inválidas');
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <Grid height='100vh' display='flex' justifyContent='center' alignItems='center'>
      <form style={{ width: isMobile ? '100%' : '50%' }} onSubmit={handleSubmit}>
        <Box
          sx={{
            width: 'auto',
            padding: '32px',
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant='h2' sx={{ fontWeight: 600, fontSize: '47px' }}>
            Boas vindas!
          </Typography>
          <Typography variant='h6' sx={{ marginBottom: '56px', fontWeight: 500, fontSize: '19px' }}>
            Digite seus dados para realizar o login!
          </Typography>
          <TextField
            required
            type='email'
            onChange={handleChangeInput}
            sx={{ width: isMobile ? '400px' : '520px', marginBottom: '24px' }}
            autoFocus
            label='Email'
            placeholder='Digite seu email'
            name='email'
            value={credentials.email}
          />
          <TextField
            required
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleChangeInput}
            sx={{ width: isMobile ? '400px' : '520px', marginBottom: '56px' }}
            autoFocus
            error={erro}
            helperText={erro ? 'Senha tem que ter mais de 6 caracteres' : ''}
            label='Senha'
            placeholder='Digite sua senha'
          />
          <Button
            type='submit'
            sx={{
              width: isMobile ? '400px' : '520px',
              textTransform: 'none',
              backgroundColor: '#94A3B8',
              color: '#f4f4f4',
              height: '54px',
              '&:hover': {
                backgroundColor: '#94A3B8',
              },
            }}
          >
            {loading ? <Loading /> : 'Login'}
          </Button>
        </Box>
      </form>
      <Box
        sx={{
          backgroundColor: '#06102B',
          height: '100vh',
          width: '50%',
          display: isMobile ? 'none' : null,
        }}
      />
    </Grid>
  );
};

export default Login;
