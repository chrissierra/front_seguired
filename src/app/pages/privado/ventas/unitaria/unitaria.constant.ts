export const subMenu: SUB_MENU[] = [
    { nombre: 'Ingresar Nuevo Paso', active: true},
    { nombre: 'Visualizar Pasos', active: false },
    { nombre: 'Configuracion' , active: false },
    { nombre: 'Acciones' , active: false }
]

export interface SUB_MENU {
    nombre: string;
    active: boolean;
}

export const VISTAS  = {
    'Ingresar Nuevo Paso': true,
    'Acciones': false,
    'Visualizar Pasos': false
}