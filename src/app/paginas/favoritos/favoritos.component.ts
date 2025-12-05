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
export class FavoritosComponent { }
