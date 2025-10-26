import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from '../../model/productos.model';
import { FavoritosService } from '../../servicios/favoritos.service';
import { CarritoService } from '../../servicios/carrito.service';
@Component({
  selector: 'app-favoritos',
  imports: [CommonModule, RouterModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit{
  productosFavorito: { producto: Producto; cantidad: number }[] = []

  constructor(private carritoService: CarritoService,private favoritosService: FavoritosService) { }

  ngOnInit(): void {
    this.favoritosService.des$.subscribe((productos) => {
      this.productosFavorito = productos;
    });
  }

  eliminarProducto(productoId: number) {
    this.favoritosService.eliminarDeFavoritos(productoId)
  }

    vaciarFavoritos(){
    this.favoritosService.vaciarFavoritos()
  }

  agregar(producto: Producto){
    this.carritoService.agregarAlCarrito(producto)
    alert('Producto agregado al carrito')
    this.favoritosService.eliminarDeFavoritos(producto.id)
  }
}
