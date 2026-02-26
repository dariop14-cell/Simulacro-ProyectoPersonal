import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoritosService } from '../../servicios/favoritos.service';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, RouterModule, NgFor],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {

  favoritos: any[] = [];
  cargando = true;
  error = '';

  constructor(
    private favoritosService: FavoritosService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.cargarFavoritos();
  }

  // ===================================================
  // CARGAR FAVORITOS
  // ===================================================
  cargarFavoritos(): void {
    this.favoritosService.obtenerFavoritos().subscribe({
      next: (res: any) => {
        this.favoritos = res;
        this.cargando = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'No se pudieron cargar los favoritos.';
        this.cargando = false;
      }
    });
  }

  // ===================================================
  // ELIMINAR FAVORITO
  // ===================================================
  eliminarFavorito(idProducto: number): void {
    this.favoritosService.eliminarFavorito(idProducto).subscribe({
      next: () => {
        // Lo eliminamos también del array local
        this.favoritos = this.favoritos.filter(f => f.id !== idProducto);
      },
      error: (err) => console.error(err)
    });
  }

  // ===================================================
  // MOVER AL CARRITO (Agregar + eliminar de favoritos)
  // ===================================================
  moverAlCarrito(producto: any): void {

    this.carritoService.agregarAlCarrito(producto).subscribe({
      next: () => {

        // Una vez agregado al carrito lo eliminamos de favoritos
        this.eliminarFavorito(producto.id);

        console.log('Producto movido al carrito');
      },
      error: (err) => console.error(err)
    });
  }
}