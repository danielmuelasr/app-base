'use client';

import { SignUpFormFields, signupValidationRules } from '@/lib/domain/auth/validations/signup.validations';
import { Box, Button, Container, Paper, Stack, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import { PasswordElement, TextFieldElement } from 'react-hook-form-mui';


export default function SingUpPage() {

    const { control, handleSubmit, getValues } = useForm<SignUpFormFields>({
        defaultValues: {
            fullname: '',
            email: '',
            username: '',
            password: '',
            confirm_password: '',
        },
    });

    const rules = signupValidationRules(getValues);

    return (
        <Container sx={{ width: '100%' }}>
            <form action="POST" onSubmit={handleSubmit(async (data) => {
                console.log(data);
            })} noValidate>
                <Box sx={{ flexGrow: 1 }}>
                    <Stack spacing={2}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                            Registrarse
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid size={12}>
                                <TextFieldElement
                                    variant='filled'
                                    name={'fullname'}
                                    label={'Nombre completo'}
                                    control={control}
                                    rules={rules.fullname}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={6}>
                                <TextFieldElement
                                    variant='filled'
                                    name={'username'}
                                    label={'Usuario'}
                                    control={control}
                                    rules={rules.username}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={6}>
                                <TextFieldElement
                                    variant='filled'
                                    name={'email'}
                                    label={'Correo electrónico'}
                                    control={control}
                                    type={'email'}
                                    rules={rules.email}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={6}>
                                <PasswordElement
                                    variant='filled'
                                    name={'password'}
                                    label={'Contraseña'}
                                    control={control}
                                    rules={rules.password}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={6}>
                                <PasswordElement
                                    variant='filled'
                                    name={'confirm_password'}
                                    label={'Confirmar Contraseña'}
                                    control={control}
                                    rules={rules.confirm_password}
                                    required
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Button variant='contained' type={'submit'}>
                            Registrarse
                        </Button>
                    </Stack>
                </Box>
            </form>
        </Container>
    );

}