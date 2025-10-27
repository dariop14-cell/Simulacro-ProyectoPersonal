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
      nombre:"Camiseta Ferrari 2025",
      descripcion:"Camiseta oficial de la 'Scuderia' temporada 2025",
      img:"https://www.cmcmotorsports.com/cdn/shop/files/shop-t-shirt-menu_2048x.jpg?v=1747827398",
      precio:45000,
      categoria:"Camiseta",
      equipo:"Ferrari"
    },
    {
      id:2,
      nombre:"Buzo Aston Martin F1 2025",
      descripcion:"Buzo oficial de Aston Martin temporada 2025",
      img:"https://http2.mlstatic.com/D_NQ_NP_610550-MLA83307205810_042025-O.webp",
      precio:20000,
      categoria:"Buzo",
      equipo:"Aston Martin"
    },
    {
      id:3,
      nombre:"Remera Williams Racing 2025",
      descripcion:"Remera oficial Williams Racing ",
      img:"https://driver1.com/cdn/shop/files/CamisetaPoloWilliamsRacingOficial2025.jpg?v=1739916403&width=600",
      precio:20000,
      categoria: "Camiseta",
      equipo: "Williams"
    },
    {
      id:4,
      nombre:"Camiseta Mercedes AMG F1 team",
      descripcion:"Camiseta oficial Mercedes AMG F1",
      img:"https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-hoodie-black_ss5_p-202359124+u-p29ozrz5c7mpsl0nsiix+v-m7mhdcdj9zsx1lu9i6gi.jpg?_hv=2",
      precio: 20000,
      categoria: "Camiseta",
      equipo: "Mercedes" 
    },
    {
      id:5,
      nombre:"Camiseta Kick Sauber F1 2025",
      descripcion:"Camiseta del equipo de Bortoleto y Hulkenberg",
      img:"https://i.ebayimg.com/images/g/1YIAAOSw~Zln5SdC/s-l225.jpg",
      precio:20000,
      categoria:"Camiseta",
      equipo: "Kick Sauber"
    },
    {
      id:6,
      nombre:"Camiseta de Racing Bulls F1 2025",
      descripcion:"Camiseta del equipo de Hadjar y Lawson",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJbrhnpxLC03bo0mzYTV_BuuqSz5mWC0twg&s",
      precio:20000,
      categoria: "Camiseta",
      equipo:"Racing Bulls"
    },
    {
      id:7,
      nombre:"Camiseta Red Bull Racing F1 2025",
      descripcion:"Camiseta del equipo comandado por Max Verstappen",
      img: "https://fanabox.com/cdn/shop/files/2025OracleRedBullRacingF1_TeamMen_sT-shirt-Navy.jpg?v=1740685793&width=1080",
      precio: 20000,
      categoria:"Camiseta",
      equipo:"Red Bull"
    },
    {
      id:8,
      nombre:"Camiseta manga larga Mercedes F1 2025",
      descripcion: "Camiseta de algodon mangas largas",
      img:"https://paddockcollectionstore.com/cdn/shop/products/701219237001_PP_1_MERCEDES_GREY.jpg?v=1645123360",
      precio:20000,
      categoria:"Camiseta",
      equipo:"Mercedes"
    },
    {
      id:9,
      nombre:"RedBull RB16B 2021",
      descripcion: "Modelo escala 1:43",
      img: "https://tiendaf1mdsports.cl/wp-content/uploads/2023/06/Burago_1_43_RedBull_RB16b_Verstappen_Caja_Acrilica_4.jpg",
      precio:40000,
      categoria: "Replica a escala",
      equipo: "Red Bull"
    },
    {
      id:32,
      nombre: "Ferrari F1-75",
      descripcion: "Modelo escala 1:43",
      img: "https://tiendaf1mdsports.cl/wp-content/uploads/2023/05/Burago_1_43_Ferrari_F1-75_Special_Leclerc_Caja_Acrilica_4-scaled.jpg",
      precio: 40000,
      categoria: "Replica a escala",
      equipo:"Ferrari"
    },
    {
      id:30,
      nombre:"Alpine A523 2023",
      descripcion: "Modelo escala 1:43",
      img: "https://tiendaf1mdsports.cl/wp-content/uploads/2023/10/Burago_1_43_Alpine_A523_Gasly_2023_Caja_Acrilica_4.jpg",
      precio: 40000,
      categoria: "Replica a escala",
      equipo:"Alpine"
    },
    {
      id:31,
      nombre: "Alfa Romeo C43",
      descripcion: "Modelo escala 1:43",
      img: "https://tiendaf1mdsports.cl/wp-content/uploads/2023/11/Burago_1_43_AlfaRomeo_C43_Zhou_2023_Caja_Acrilica_4.jpg",
      precio: 40000,
      categoria: "Replica a escala",
      equipo:"Kick Sauber"
    },
    {
      id:33,
      nombre:"Gorra Ferrari",
      descripcion: "Lewis Hamilton edition",
      img: "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2025-team-lewis-hamilton-cap-red_ss5_p-202358980+u-cyv4xtwh0yojc1dmjekk+v-irkryngn7dusjeqb7lx8.jpg?_hv=2&w=532",
      precio:10000,
      categoria:"Gorra",
      equipo:"Ferrari"
    },
    {
      id:34,
      nombre:"Gorra Red Bull",
      descripcion: "Max Verstappen version",
      img:"https://images.footballfanatics.com/red-bull-racing/red-bull-racing-new-era-max-verstappen-9seventy-piped-cap-navy-kids_ss5_p-202169039+u-tqeqnqjmkeawkjjafl0w+v-kbjgfsxx5rkn8bpmi9dz.jpg?_hv=2&w=532",
      precio: 10000,
      categoria:"Gorra",
      equipo:"Red Bull"
    },
    {
      id:35,
      nombre: "Gorra McLaren",
      descripcion: "Black version",
      img: "https://images.footballfanatics.com/mclaren-f1-team/mclaren-new-era-seasonal-9forty-cap-black_ss5_p-203468589+pv-1+u-6srn9wwmxafkqyhmvnx3+v-rcifmcommqlv6lts0yub.jpg?_hv=2&w=1018",
      precio: 10000,
      categoria:"Gorra",
      equipo:"McLaren"
    },
    {
      id:36,
      nombre:"Gorra Mercedes",
      descripcion: "George Russell edition",
      img: "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-george-russell-cap-blue_ss5_p-202359132+u-rex1kcwwuoi9wrbh1q6l+v-llugqwwqj7jr871ecqyt.jpg?_hv=2&w=532",
      precio: 10000,
      categoria:"Gorra",
      equipo:"Mercedes"
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
