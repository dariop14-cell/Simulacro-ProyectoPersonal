import { Component } from '@angular/core';
import { CommonModule,NgClass, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Producto } from '../../model/productos.model';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  imports: [CommonModule,NgClass,NgFor,RouterModule,FormsModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  constructor(private carritoService: CarritoService, private favoritosService: FavoritosService){ }
  agregar(product: Producto){
    this.carritoService.agregarAlCarrito(product)
    alert('Producto agregado al carrito')
  }

  /*agregarFavorito(product: Producto){
    this.favoritosService.agregarAfavoritos(product)
    alert('Producto agregado a la lista de favoritos')
  }*/

  searchTerm: string = '';

  selectedCategory: string= '';
  selectedBrand: string = '';
  minprecio: number | null = null;
  maxprecio: number | null = null;

  get productos(): Producto[]{
    return this.categorias.flatMap(equipo => equipo.productos)
  }

  get categoria(): string[]{
    return [...new Set(this.productos.map(p=>p.categoria))]
  }

  get equipo(): string[]{
    return[...new Set(this.productos.map(p=>p.equipo))]
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
    return this.productos.filter(p =>
    (this.searchTerm === '' || p.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
    (this.selectedCategory === '' || p.categoria === this.selectedCategory) &&
    (this.selectedBrand === '' || p.equipo === this.selectedBrand) && 
    (this.minprecio === null || p.precio>=this.minprecio) &&
    (this.maxprecio === null || p.precio <= this.maxprecio)
    )
  }

  mostrarFiltros: boolean = false;
  toggleFiltros(): void {
    this.mostrarFiltros = !this.mostrarFiltros;
  }

  validarPrecios(): void {
    if (this.minprecio !== null && this.minprecio < 0){
      this.minprecio = 0;
    }
    if (this.maxprecio !== null && this.maxprecio < 0){
      this.maxprecio = 0;
    }
  }
}