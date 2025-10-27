import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Equipo, Producto } from '../../model/productos.model';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service';

@Component({
  selector: 'app-categorias',
  imports: [CommonModule,NgFor,RouterModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  categorias: Equipo[] = [
    {
      nombre: "McLAREN",
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
          nombre: "Camiseta Mclaren Senna",
          img: "https://www.fuelforfans.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3b2e929e/images/large/701234832001_pp_01_mclarensennamonacoyellow.jpg?sw=800&sh=800&sm=fit",
          descripcion: "Senna tribute edition Monaco 2024",
          precio: 35000
        }
      ]
    },
    {
      nombre: "FERRARI",
      productos: [
        {
          id: 17,
          nombre: "Camiseta Scuderia Ferrari",
          img: "https://www.theraceworks.com/cdn/shop/files/701232808001_PP_1_FERRARI_763951_01-scaled.jpg?v=1741399655&width=2560",
          descripcion: "Edicion oficial temporada 2025",
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
          nombre: "Camiseta Ferrari",
          img: "https://www.rallymerchandise.eu/hpeciai/36e64ae20629306bc78500b3326fd763/eng_pl_2024-Ferrari-F1-Mens-Monza-GP-T-Shirt-21373_2.jpg",
          descripcion: "Edicion especial Monza 2024",
          precio: 35000
        },
        {
          id: 20,
          nombre: "Buzo frizza Ferrari",
          img: "https://formulaentreamigos.com/wp-content/uploads/2025/02/701232805001_PP_1_FERRARI_763941_01-scaled.jpg",
          descripcion: "Estilo frizado 2025",
          precio: 40000
        }
      ]
    },
    {
      nombre: "RED BULL RACING",
      productos: [
        {
          id: 21,
          nombre: "Camiseta polo Red Bull",
          img: "https://m.media-amazon.com/images/I/61XFSohAr5L._AC_SL1500_.jpg",
          descripcion: "Contiene algodon y poliester",
          precio: 20000
        },
        {
          id: 22,
          nombre: "Buzo Red Bull Racing 2022'",
          img: "https://m.media-amazon.com/images/I/61TdyCu5iaL._AC_UY1000_.jpg",
          descripcion: "Mercancia oficial para la temporada 2022",
          precio: 35000
        },
        {
          id: 23,
          nombre: "Remera RB Japanese GP",
          img: "https://www.cmcmotorsports.com/cdn/shop/files/TU14431-001-01.jpg?v=1743189466",
          descripcion: "Camiseta edicion especial",
          precio: 30000
        },
        {
          id: 24,
          nombre: "Red Bull F1 cap",
          img: "https://tracksidegear.com/cdn/shop/files/RedbullcapF1Team6066922399SEVENTYhatnewera_1024x.jpg?v=1753418640",
          descripcion: "Gorra Max Verstappen N°1",
          precio: 15000
        }
      ]
    },
    {
      nombre: "MERCEDES",
      productos: [
        {
          id: 25,
          nombre: "Camiseta Mercedes 2025",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHdVi__DRGU61_qRZASvnq6vfg3A1YMtBQA&s",
          descripcion: "Edicion 'enginner'",
          precio: 20000
        },
        {
          id: 26,
          nombre: "Camiseta de equipo 24'",
          img: "https://fanabox.com/cdn/shop/files/701227950001_pp_02_MercedesFormula1.jpg?v=1741649132&width=1080",
          descripcion: "Puma x Mercedes White",
          precio: 30000
        },
        {
          id: 27,
          nombre: "Chaqueta Mercedes F1",
          img: "https://m.media-amazon.com/images/I/71cVy62YW4L._UY1000_.jpg",
          descripcion: "Edicion SoftShell x Puma",
          precio: 40000
        },
        {
          id: 28,
          nombre: "George Russell 63 cap",
          img: "https://starniza.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-12-at-4.36.58-PM.jpeg",
          descripcion: "Replica oficial",
          precio: 15000
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
