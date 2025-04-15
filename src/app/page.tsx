'use client';

import { Button, Container, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { PasswordElement, TextFieldElement, useForm } from 'react-hook-form-mui';
import { loginValidationRules } from '@/lib/domain/auth/validations/login.validation';
import { CustomAlert } from './ui/alerts/alerts';
import { loginHandler } from '@/lib/domain/auth/handlers/login.handler';

export default function Home() {

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const rules = loginValidationRules(getValues);
  const [loginError, setLoginError] = useState('');
  const [open, setOpen] = useState(false)

  return (
    <Container>

      <CustomAlert
        message={loginError}
        title={'Error iniciado sesión'}
        severity={'error'}
        isOpen={open}
        onClose={() => setOpen(false)}
      />

      <form method="POST" onSubmit={handleSubmit((data) => loginHandler(data, setLoginError, setOpen))} noValidate>
        <Stack spacing={2}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            Iniciar sesión
          </Typography>

          <TextFieldElement
            variant='filled'
            name={'username'}
            label={'Usuario'}
            control={control}
            rules={rules.username}
            required
            fullWidth
          />

          <PasswordElement
            variant='filled'
            name={'password'}
            label={'Contraseña'}
            rules={rules.password}
            control={control}
            fullWidth
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
