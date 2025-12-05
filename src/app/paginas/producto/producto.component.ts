import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from '../../model/productos.model';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service';
import { ProductService } from '../../servicios/product.service';


  
@Component({
  selector: 'app-producto',
  imports: [CommonModule,RouterModule,NgFor],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  producto: Producto[] = []

  // Estado para mostrar un spinner o mensaje de carga.
  cargando = true;

  // Texto para mostrar un error en la interfaz si algo falla.
  error = '';

  constructor(
    // Servicio encargado de obtener productos desde el backend.
    private productService: ProductService,

    // Servicio responsable de agregar productos al carrito y manejar su estado.
    private carritoService: CarritoService,

    // Servicio encargado de gestionar los productos favoritos del usuario.
    private favoritoService: FavoritosService
  ) {}

  // Método del ciclo de vida, se ejecuta al inicializar el componente.
  ngOnInit(): void {
    this.cargarProductos(); // Carga inicial de productos.
  }

  // Solicita al backend la lista completa de productos.
  cargarProductos(): void {
    this.productService.obtenerProductos().subscribe({

      // Si la petición es exitosa:
      next: (res: any) => {
        this.producto = res;    // Se asigna la lista recibida.
        this.cargando = false;   // Finaliza el estado de carga.
      },

      // Si ocurre un error:
      error: (err) => {
        console.error('Error al cargar productos:', err);
        this.error = 'No se pudieron cargar los productos.'; // Mensaje visible al usuario.
        this.cargando = false;
      }
    });
  }

  // Agrega un producto al carrito llamando al servicio correspondiente.
  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregarAlCarrito(producto).subscribe({
      next: () => console.log('Producto agregado'),
      error: err => console.error(err)
    });
  }

  // Agrega un producto a la lista de favoritos del usuario.
  agregarAFavoritos(producto: Producto): void {
    this.favoritoService.agregarFavorito(producto).subscribe({
      next: () => console.log('Agregado'),
      error: (err) => console.error(err)
    });
  }
}

  /*
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
  */
