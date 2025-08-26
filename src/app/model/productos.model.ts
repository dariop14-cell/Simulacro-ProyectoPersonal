export interface Producto {
    id: number
    nombre: string
    descripcion: string
    precio: number
    img: string
    cantidad?: number
}

export interface Categoria {
    nombre: string
    productos: Producto[];
}