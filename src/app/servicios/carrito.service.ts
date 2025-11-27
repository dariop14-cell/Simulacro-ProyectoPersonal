import { Injectable } from '@angular/core';
import { Producto } from '../model/productos.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carritoSubject = new BehaviorSubject<{ producto: Producto; cantidad: number}[]>([]);
  carrito$ = this.carritoSubject.asObservable()

  agregarAlCarrito(producto: Producto) {
    const productos = this.carritoSubject.getValue();
    const encontrado = productos.find(p => p.producto.id === producto.id)

    if (encontrado) {
      encontrado.cantidad++
    }else{
      this.carritoSubject.next([...productos, { producto, cantidad: 1 }])
    }
  }
  
  
  eliminarDelCarrito(productoId: number) {
    const productos = this.carritoSubject.getValue().filter(p => p.producto.id !== productoId)
    this.carritoSubject.next(productos)
  }

  vaciarCarrito() {
    this.carritoSubject.next([])
  }
  


  actualizarCantidad(productoID: number, nuevaCantidad:number){

    const productos = this.carritoSubject.getValue().map(item => {
      if (item.producto.id === productoID)

      return {
        ...item, cantidad: nuevaCantidad
      }
      return item
    })

    this.carritoSubject.next(productos)
  }

  obtenerProductos(): {producto: Producto; cantidad: number}[]{
    return this.carritoSubject.getValue();
  }

  
  obtenerTotal():number{
    const productos = this.carritoSubject.getValue();

    return productos.reduce((total,item) => total + item.producto.precio * item.cantidad, 0)
  }

  constructor(){ }
}
