'use client';

import { AuthService } from '@/lib/services/auth.service';
import { Alert, AlertTitle, Box, Button, Collapse, Container, IconButton, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { PasswordElement, TextFieldElement, useForm } from 'react-hook-form-mui';
import CloseIcon from '@mui/icons-material/Close';

export default function Home() {

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const [loginError, setLoginError] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
          <Alert
            severity="error"
            title='No se pudo iniciar sesión'
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {loginError}
          </Alert>
        </Collapse>
      </Box>

      <form onSubmit={handleSubmit(async (data) => {
        try {
          const loginData = await AuthService.login(data);
          console.log(loginData);
        }
        catch (error: any) {
          if (error) {
            setLoginError(error.data.error || error.data.errors[0].msg);
            setOpen(true);
          } else {
            setLoginError("Ocurrió un error inesperado. Intenta más tarde.");
          }
        }
      })} noValidate>
        <Stack spacing={2}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            Iniciar sesión
          </Typography>

          <TextFieldElement
            variant='filled'
            name={'username'}
            label={'Usuario'}
            control={control}
            rules={{
              required: 'El nombre de usuario es obligatorio',
              minLength: {
                value: 3,
                message: 'El nombre de usuario debe tener al menos 3 caracteres',
              },
            }}
            required
            fullWidth
          />

          <PasswordElement
            variant='filled'
            name={'password'}
            label={'Contraseña'}
            rules={{
              required: 'La contraseña es requerída',
              minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 6 caracteres',
              },
            }}
            control={control}
            required
          />

          <Button variant='contained' type={'submit'}>
            Iniciar sesión
          </Button>

        </Stack>
      </form>

    </Container>
  );
}
