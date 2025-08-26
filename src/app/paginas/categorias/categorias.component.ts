import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Categoria, Producto } from '../../model/productos.model';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service';

@Component({
  selector: 'app-categorias',
  imports: [CommonModule,NgFor,RouterModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  categorias: Categoria[] = [
    {
      nombre: "Mclaren Team",
      productos: [
        {
          id: 13,
          nombre: "Camiseta McLaren F1 2023",
          descripcion: "Sudadera del equipo británico",
          img: "https://www.fuelforfans.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0f085c3c/images/large/701231432001_pp_01_mclarenf1.jpg?sw=800&sh=800&sm=fit",
          precio: 12000
        },
        {
          id: 14,
          nombre: "Zip Sweat McLaren F1 25",
          img: "https://www.fuelforfans.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw487d2ec5/images/large/701235597001_pp_01_mclaren.jpg?sw=1600&sh=1600&sm=fit",
          descripcion: "Buzo estilo sudadera",
          precio: 30000
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
          nombre: "Camiseta Mclaren F1 Miami",
          img: "https://www.cmcmotorsports.com/cdn/shop/files/tcrw6016-clbyypppmtwh_1.jpg?v=1682514396",
          descripcion: "Edicion especial para el GP",
          precio: 35000
        }
      ]
    },
    {
      nombre: "Ferrari",
      productos: [
        {
          id: 17,
          nombre: "Camiseta Scuderia Ferrari",
          img: "https://www.theraceworks.com/cdn/shop/files/701232808001_PP_1_FERRARI_763951_01-scaled.jpg?v=1741399655&width=2560",
          descripcion: "Merch oficial para la temporada 25'",
          precio: 30000
        },
        {
          id: 18,
          nombre: "Gorra LH44 Ferrari",
          img: "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2025-team-lewis-hamilton-cap-white_ss5_p-202358979+u-gq5oeycuix4ewgkqpq4f+v-cbvk6bvslonb7jmwstao.jpg?_hv=2&w=532",
          descripcion: "Gorra Lewis Hamilton white edition",
          precio: 20000
        },
        {
          id: 19,
          nombre: "Camiseta Ferrari Monza 24",
          img: "https://www.rallymerchandise.eu/hpeciai/36e64ae20629306bc78500b3326fd763/eng_pl_2024-Ferrari-F1-Mens-Monza-GP-T-Shirt-21373_2.jpg",
          descripcion: "Edicion especial para el GP italiano",
          precio: 35000
        },
        {
          id: 20,
          nombre: "Buzo frizza Ferrari 25",
          img: "https://formulaentreamigos.com/wp-content/uploads/2025/02/701232805001_PP_1_FERRARI_763941_01-scaled.jpg",
          descripcion: "Buzo estilo frizado de la Scuderia",
          precio: 40000
        }
      ]
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
