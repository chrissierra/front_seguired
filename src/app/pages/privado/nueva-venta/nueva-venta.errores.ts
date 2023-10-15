import { ACCIONES_ERRORES, ERROR_TIPO } from "src/app/shared/errores.enum";


// Definición del enum para los errores de nueva venta
export enum ERRORES_NUEVA_VENTA_TIPOS {
    ERROR_OBTENIENDO_CLIENTES = 'ERROR_OBTENIENDO_CLIENTES',
    // otros errores
  }
  
// Definición de los errores de nueva venta
export const ERRORES_NUEVA_VENTA: Record<ERRORES_NUEVA_VENTA_TIPOS, ERROR_TIPO> = {
[ERRORES_NUEVA_VENTA_TIPOS.ERROR_OBTENIENDO_CLIENTES]: {
    mensaje: `Hubo un error obteniendo los clientes. Vuelve a ingresar`,
    accion: ACCIONES_ERRORES.REDIRIGIR_LOGIN,
    
},
// otros errores
};