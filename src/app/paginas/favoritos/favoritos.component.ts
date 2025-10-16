import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from '../../model/productos.model';
import { FavoritosService } from '../../servicios/favoritos.service';

@Component({
  selector: 'app-favoritos',
  imports: [CommonModule, RouterModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit{
  productosFavorito: { producto: Producto; cantidad: number }[] = []

  constructor(private favoritosService: FavoritosService) { }

  ngOnInit(): void {
    this.favoritosService.des$.subscribe((productos) => {
      this.productosFavorito = productos;
    });
  }
 
  eliminarProducto(productoId: number) {
    this.favoritosService.eliminarDeFavoritos(productoId)
  }
}
