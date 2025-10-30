import { Producto } from "./productos.model";

export interface Equipo {
    nombre: string;
    productos: Producto[];
}