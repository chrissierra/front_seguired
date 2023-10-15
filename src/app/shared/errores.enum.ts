export enum ACCIONES_ERRORES {
    REDIRIGIR_LOGIN = 'REDIRIGIR_LOGIN'
}

export type ERROR_TIPO = {
    mensaje: string;
    accion: ACCIONES_ERRORES;
    verbose?: string
}
