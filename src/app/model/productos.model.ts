export interface Producto {
    id: number
    nombre: string
    descripcion: string
    precio: number
    img: string
    cantidad?: number
    categoria: string
    equipo: string
}

export interface Equipo {
    nombre: string
    productos: Producto[];
}