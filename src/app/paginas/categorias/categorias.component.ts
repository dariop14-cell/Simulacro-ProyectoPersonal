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
          nombre: "Camiseta Mclaren F1 Miami",
          img: "https://www.cmcmotorsports.com/cdn/shop/files/tcrw6016-clbyypppmtwh_1.jpg?v=1682514396",
          descripcion: "Edicion especial para el GP",
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
    },
    {
      nombre: "RED BULL RACING",
      productos: [
        {
          id: 21,
          nombre: "Camiseta polo Red Bull",
          img: "https://fueler.store/cdn/shop/files/red-bull-racing-2024-team-polo-fuelertm-tm5288-s-fueler-store-33034.jpg?v=1746013453&width=1080",
          descripcion: "Contiene algodon y poliester",
          precio: 20000
        },
        {
          id: 22,
          nombre: "Buzo Red Bull F1 22'",
          img: "https://m.media-amazon.com/images/I/71EAvOnJ1qL.jpg",
          descripcion: "Buzo oficial del equipo del toro",
          precio: 35000
        },
        {
          id: 23,
          nombre: "Remera RB Japanese GP",
          img: "https://pitshop.mx/cdn/shop/files/ProductosPitshop-2025-05-24T114808.229.jpg?v=1748108541",
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
          nombre: "Merc' Team t-shirt",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHdVi__DRGU61_qRZASvnq6vfg3A1YMtBQA&s",
          descripcion: "Enginners t-shirt",
          precio: 20000
        },
        {
          id: 26,
          nombre: "Camiseta de equipo 24'",
          img: "https://fanabox.com/cdn/shop/files/701227950001_pp_02_MercedesFormula1.jpg?v=1741649132&width=1080",
          descripcion: "Puma x Mercedes 2024",
          precio: 30000
        },
        {
          id: 27,
          nombre: "Chaqueta Mercedes F1 22'",
          img: "https://www.fuelforfans.com/on/demandware.static/-/Sites-master-catalog/default/dwfa63b412/images/large/701220701001_pp_01_mercedes-amg-f1-team.jpg",
          descripcion: "En colaboración con Hugo Boss",
          precio: 40000
        },
        {
          id: 28,
          nombre: "George Russell 63 cap",
          img: "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-2023-george-russell-cap-black_ss4_p-13368658+pv-1+u-1gtzdnq2r6qxkxa05mjn+v-c363588772c44276964c0fcc101523a8.jpg?_hv=2&w=900",
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
