'use client';

import { AuthService } from '@/lib/services/auth.service';
import { Button, Container, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { PasswordElement, TextFieldElement, useForm } from 'react-hook-form-mui';

export default function Home() {

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  return (
    <Container>

      <form onSubmit={handleSubmit(async (data) => {
        try {
          const loginData = await AuthService.login(data);
          console.log(loginData);
        }
        catch (error) {
          console.error(error);
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
