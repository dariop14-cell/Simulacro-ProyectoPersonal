import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Producto } from '../../model/productos.model';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service';

@Component({
  selector: 'app-categorias',
  imports: [CommonModule,NgFor,RouterModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  producto: Producto[] = [
    {
      id:13,
      nombre:"Camiseta McLaren F1 2023",
      descripcion:"Sudadera del equipo britanico",
      img:"https://m.media-amazon.com/images/I/71AmJbCJriL.jpg",
      precio:12000
    },
    {
      id:14,
      nombre:"Zip Sweat McLaren F1 25",
      img:"https://www.fuelforfans.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw487d2ec5/images/large/701235597001_pp_01_mclaren.jpg?sw=1600&sh=1600&sm=fit",
      descripcion:"Buzo estilo sudadera",
      precio:30000
    },
    {
      id:15,
      nombre:"Lando Norris cap F1 2025",
      img:"https://ultimatefan.co.za/cdn/shop/files/486a76724fe3a4d114470476dbcaf982_1296x_460d2552-fe83-444a-867f-0a8b82b56491.webp?v=1710608912",
      descripcion:"Gorra del piloto britanico ",
      precio:10000
    },
    {
      id:16,
      nombre: "McLaren F1 Silverstone 23",
      img:"https://www.racingmodelismo.com/8345-22494/8345-22494-537204355-22494.jpg",
      descripcion:"Modelo a escala del GP Britanico 23",
      precio:47000
    }
  ]

  constructor(private carritoService: CarritoService, private favoritosService: FavoritosService){ }
  agregar(product: Producto){
    this.carritoService.agregarAlCarrito(product)
    alert('Producto agregado al carrito')
  }

  agregarFavorito(product: Producto){
    this.favoritosService.agregarAfavoritos(product)
    alert('Producto agregado a la lista de favoritos')
  }
}
