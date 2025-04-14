'use client';

import { Box, Container, Paper, Stack, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import { PasswordElement, TextFieldElement } from 'react-hook-form-mui';


export default function SingUpPage() {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            fullname: '',
            username: '',
            password: '',
        },
    });

    return (
        <Container sx={{ width: '100%' }}>
            <Box sx={{ flexGrow: 1 }}>
                <form action="POST">
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
                        </Grid>
                        <Grid size={6}>
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
                        </Grid>
                        <Grid size={6}>
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
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );

}