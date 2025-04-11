// app/theme.ts

'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0d489A',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#FFCE93',
            contrastText: '#06112D',
        },
        error: {
            main: '#FF6157',
        },
        success: {
            main: '#61C877',
        },
        grey: {
            500: '#6A7081',
        },
        background: {
            default: '#F5F5F5',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#06112D',
            secondary: '#6A7081',
        },
    },
    typography: {
        fontFamily: 'var(--font-nunito)',
        h1: {
            fontFamily: 'var(--font-nunito)',
            fontWeight: 700,
        },
        h2: {
            fontFamily: 'var(--font-nunito)',
            fontWeight: 700,
        },
        h3: {
            fontFamily: 'var(--font-nunito)',
            fontWeight: 700,
        },
        h4: {
            fontFamily: 'var(--font-nunito)',
            fontWeight: 700,
        },
        h5: {
            fontFamily: 'var(--font-nunito)',
            fontWeight: 700,
        },
        h6: {
            fontFamily: 'var(--font-nunito)',
            fontWeight: 700,
        },
    },
    components: {
        MuiTextField: {
            defaultProps: {
                variant: 'filled',
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'var(--font-nunito)',
                    textTransform: 'uppercase',
                    fontWeight: 900,
                    fontSize: '0.70rem',
                    borderRadius: '0.5rem',
                    padding: '0.5rem 1rem',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                filled: {
                    textTransform: 'uppercase',
                    fontWeight: 900,
                    fontSize: '0.70rem',
                    fontFamily: 'var(--font-nunito)',
                },
            },
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    fontFamily: 'var(--font-nunito)',
                    backgroundColor: '#F1F5F9',
                    borderRadius: '0.5rem',
                    '&:before': {
                        borderBottom: '1px solid #0d489A',
                    },
                    '&:hover:before': {
                        borderBottom: '1px solid #0d489A',
                    },
                    '&.Mui-focused:before': {
                        borderBottom: '2px solid #0d489A',
                    },
                },
                input: {
                    fontFamily: 'var(--font-nunito)',
                },
            },
        },
    }

});

export default theme;
