export enum NOMBRE_ERRORES {
    ID_EQUIVOCADO = 'ID_EQUIVOCADO',
    SIN_PASOS_INGRESADOS = 'SIN_PASOS_INGRESADOS'
}

export interface iERROR {
    texto: string;
}

export type TipoErrores = { [key in NOMBRE_ERRORES]: iERROR };


export const ERRORES: TipoErrores = {
    [NOMBRE_ERRORES.ID_EQUIVOCADO]: { texto: `El id Ingresado no está asociado a ninguna compra, por favor verifica el link que te han entregado.` },
    [NOMBRE_ERRORES.SIN_PASOS_INGRESADOS]: { texto: `Tu compra aún no termina de procesarse, vuelve a consultar en otro momento.`}
}