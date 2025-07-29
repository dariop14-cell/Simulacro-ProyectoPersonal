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
  producto: Producto[] = [
    {
      id: 1,
      nombre:"Camiseta Scuderia Ferrari 2025",
      descripcion:"Auriculares Bluetooth Tipo Vincha (Bt301N-B)",
      img:"https://www.cmcmotorsports.com/cdn/shop/files/shop-t-shirt-menu_2048x.jpg?v=1747827398",
      precio:45000
    },
    {
      id:2,
      nombre:"Buzo Aston Martin f1 2025",
      descripcion:"Buzo del equipo de Fernando Alonso y Lance Stroll para la temporada 2025",
      img:"https://fueler.store/cdn/shop/files/aston-martin-f1-2025-team-hoody-fuelertm-701233042001802-fueler-store-21350.jpg?v=1746020465&width=1080",
      precio:130000
    },
    {
      id:3,
      nombre:"Remera Williams Racing 2025",
      descripcion:"Remera del equipo britanico para la temporada 2025 de F1",
      img:"https://driver1.com/cdn/shop/files/CamisetaPoloWilliamsRacingOficial2025.jpg?v=1739916403&width=600",
      precio:200000
    },
    {
      id:4,
      nombre:"Camiseta Mercedes AMG F1 team",
      descripcion:"Camiseta del equipo mas dominante de la decada pasada",
      img:"https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-hoodie-black_ss5_p-202359124+u-p29ozrz5c7mpsl0nsiix+v-m7mhdcdj9zsx1lu9i6gi.jpg?_hv=2",
      precio: 20000 
    }
  ]

  constructor(private carritoService: CarritoService, private favoritosService: FavoritosService){ }
  agregar(product: Producto){
    this.carritoService.agregarAlCarrito(product)
    alert('Producto agregado al carrito')
  }

  agregarFavorito(product: Producto){
    this.favoritosService.agregarAfavoritos(product)
    alert('Producto agregado a la lista de favoritos ')
  }
}
