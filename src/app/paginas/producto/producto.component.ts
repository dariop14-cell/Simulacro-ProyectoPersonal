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
      precio:20000
    },
    {
      id:3,
      nombre:"Remera Williams Racing 2025",
      descripcion:"Remera del equipo britanico para la temporada 2025 de F1",
      img:"https://driver1.com/cdn/shop/files/CamisetaPoloWilliamsRacingOficial2025.jpg?v=1739916403&width=600",
      precio:20000
    },
    {
      id:4,
      nombre:"Camiseta Mercedes AMG F1 team",
      descripcion:"Camiseta del equipo mas dominante de la decada pasada",
      img:"https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-hoodie-black_ss5_p-202359124+u-p29ozrz5c7mpsl0nsiix+v-m7mhdcdj9zsx1lu9i6gi.jpg?_hv=2",
      precio: 20000 
    },
    {
      id:5,
      nombre:"Camiseta Alpine Renault 2025",
      descripcion:"Camiseta de algodon del equipo de Franco Colapinto",
      img:"https://m.media-amazon.com/images/I/51cn72UGDpL._UY1000_.jpg",
      precio:20000
    },
    {
      id:6,
      nombre:"Camiseta RedBull Japón 2025",
      descripcion:"Camiseta edición GP de Honda",
      img:"https://down-sg.img.susercontent.com/file/e9af90c7eff8bc3c0221503de7613970",
      precio:25000
    },
    {
      id:7,
      nombre: "Buzo McLaren F1 2024",
      descripcion:"Buzo de algodon de los actuales campeones del mundo",
      img:"https://www.fuelforfans.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3eaed9c1/images/large/701231437001_pp_01_mclarenf1.jpg?sw=800&sh=800&sm=fit",
      precio:30000
    },
    {
      id:8,
      nombre: "Camiseta Moneygram Haas F1 2025",
      descripcion: "Camiseta de algodon",
      img:"https://www.f1authentics.com/cdn/shop/files/KevinMagnussen2024SignedPoloShirt_2.jpg?crop=center&height=4472&v=1720773831&width=4472",
      precio:20000
    },
    {
      id:9,
      nombre:"Camiseta Kick Sauber F1 2025",
      descripcion:"Camiseta del equipo de Bortoleto y Hulkenberg",
      img:"https://i.ebayimg.com/images/g/1YIAAOSw~Zln5SdC/s-l225.jpg",
      precio:20000
    },
    {
      id:10,
      nombre:"Camiseta de Racing Bulls F1 2025",
      descripcion:"Camiseta del equipo de Hadjar y Lawson",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJbrhnpxLC03bo0mzYTV_BuuqSz5mWC0twg&s",
      precio:20000
    },
    {
      id:11,
      nombre:"Camiseta Red Bull Racing F1 2025",
      descripcion:"Camiseta del equipo comandado por Max Verstappen",
      img: "https://fanabox.com/cdn/shop/files/2025OracleRedBullRacingF1_TeamMen_sT-shirt-Navy.jpg?v=1740685793&width=1080",
      precio: 20000
    },
    {
      id:12,
      nombre:"Camiseta manga larga Mercedes F1 2025",
      descripcion: "Camiseta de algodon mangas largas",
      img:"https://paddockcollectionstore.com/cdn/shop/products/701219237001_PP_1_MERCEDES_GREY.jpg?v=1645123360",
      precio:20000
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
