import { ApiError, postResource } from "../infraestructure/api.endponits";


export class AuthService {

    static async login(data: {}): Promise<any | null> {
        try {
            const response = await postResource('auth/login', data);
            return response;
        } catch (error) {
            AuthService.handleError(error);
            return [];
        }
    }


    private static handleError(error: any): void {
        if (error instanceof ApiError) {
            throw new Error(JSON.stringify(error.data));
        } else {
            throw new Error(JSON.stringify({ message: "Error desconocido", details: error }));
        }
    }
}