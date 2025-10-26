export interface Producto {
    id: number
    nombre: string
    descripcion: string
    precio: number
    img: string
    cantidad?: number
}

export interface Equipo {
    nombre: string
    productos: Producto[];
}