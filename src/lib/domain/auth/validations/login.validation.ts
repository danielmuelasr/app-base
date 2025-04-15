import { UseFormGetValues } from "react-hook-form";

interface LoginFormFields {
    username: string;
    password: string;
}

export const loginValidationRules = (getValues: UseFormGetValues<LoginFormFields>) => ({
    username: {
        required: 'El nombre de usuario es obligatorio',
        minLength: {
            value: 3,
            message: 'El nombre de usuario debe tener al menos 3 caracteres',
        },
    },
    password: {
        required: 'La contraseña es obligatoria',
        minLength: {
            value: 8,
            message: 'La contraseña debe tener al menos 8 caracteres',
        },
    }
});