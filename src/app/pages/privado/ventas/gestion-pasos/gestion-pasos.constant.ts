
export enum NOMBRE_ESTADOS {
    EJECUTANDO='EJECUTANDO',
    EJECUTADO='EJECUTADO',
    PENDIENTE='PENDIENTE',
}
export const ESTADOS = {
    [NOMBRE_ESTADOS.EJECUTANDO]: { texto: 'En curso', clase: {'bg-success': true  }},
    [NOMBRE_ESTADOS.EJECUTADO]: { texto: 'Ejecutado', clase: {'bg-secondary': true } },
    [NOMBRE_ESTADOS.PENDIENTE]: { texto: 'Pendiente', clase: {'bg-warning' : true }}
}

export const ERRORES_GESTION_PASOS = {
    SIN_PASOS_INGRESADOS: `No existe ningún paso ingresado asociado a esta venta. `
}
