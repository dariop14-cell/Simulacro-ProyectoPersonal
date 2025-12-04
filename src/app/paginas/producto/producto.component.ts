import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from '../../model/productos.model';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service';


  
@Component({
  selector: 'app-producto',
  imports: [CommonModule,RouterModule,NgFor],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  producto: Producto[] = []

  constructor(private carritoService: CarritoService, private favoritosService: FavoritosService){ }
  agregar(product: Producto){
    this.carritoService.agregarAlCarrito(product)
    alert('Producto agregado al carrito')
  }

  agregarFavorito(product: Producto){
    this.favoritosService.agregarAfavoritos(product)
    alert('Producto agregado a la lista de favoritos')
  }

searchTerm: string = '';

selectedCategory: string= '';
selectedBrand: string = '';
minprecio: number | null = null;
maxprecio: number | null = null;

get categoria(): string[]{
  return [...new Set(this.producto.map(p=>p.categoria))]
}

get equipo(): string[]{
  return[...new Set(this.producto.map(p=>p.equipo))]
}

onSearch(event:Event):void{
  event.preventDefault();
}

resetFilters():void{
  this.searchTerm = '';
  this.selectedCategory = '';
  this.selectedBrand = '';
  this.minprecio = null;
  this.maxprecio = null;
}

get filteredProducts():Producto[]{
  return this.producto.filter(p =>
  (this.searchTerm === '' || p.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
  (this.selectedCategory === '' || p.categoria === this.selectedCategory) &&
  (this.selectedBrand === '' || p.equipo === this.selectedBrand) && 
  (this.minprecio === null || p.precio>=this.minprecio) &&
  (this.maxprecio === null || p.precio <= this.maxprecio)
  )
}
}
