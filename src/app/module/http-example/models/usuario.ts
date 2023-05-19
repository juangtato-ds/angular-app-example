export interface Usuario extends UsuarioNuevo{
    id: number
}

export interface UsuarioNuevo {
    nombre: string,
    apellidos: string,
    email: string
}