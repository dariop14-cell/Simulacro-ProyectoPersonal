import { Component } from '@angular/core';
import { CommonModule,NgClass, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Equipo } from '../../model/equipos.model';
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
  categorias: Equipo[] = [
    {
      nombre: "McLAREN",
      productos: [
        {
          id: 13,
          nombre: "Camiseta McLaren F1 2023",
          descripcion: "Sudadera del equipo británico",
          img: "https://www.fuelforfans.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0f085c3c/images/large/701231432001_pp_01_mclarenf1.jpg?sw=800&sh=800&sm=fit",
          precio: 12000,
          categoria: "Camiseta",
          equipo: "McLaren"
        },
        {
          id: 14,
          nombre: "Zip Sweat McLaren F1 25",
          img: "https://www.fuelforfans.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw487d2ec5/images/large/701235597001_pp_01_mclaren.jpg?sw=1600&sh=1600&sm=fit",
          descripcion: "Buzo estilo sudadera",
          precio: 30000,
          categoria: "Buzo",
          equipo: "McLaren"
        },
        {
          id:15,
          nombre:"Lando Norris cap F1 2025",
          img:"https://ultimatefan.co.za/cdn/shop/files/486a76724fe3a4d114470476dbcaf982_1296x_460d2552-fe83-444a-867f-0a8b82b56491.webp?v=1710608912",
          descripcion:"Gorra del piloto britanico ",
          precio:10000,
          categoria: "Gorra",
          equipo: "McLaren"
        },
        { 
          id:16,
          nombre: "Camiseta Mclaren Senna",
          img: "https://www.fuelforfans.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3b2e929e/images/large/701234832001_pp_01_mclarensennamonacoyellow.jpg?sw=800&sh=800&sm=fit",
          descripcion: "Senna tribute edition Monaco 2024",
          precio: 35000,
          categoria: "Camiseta",
          equipo: "McLaren"
        },
        {
          id:45,
          nombre:"Buzo McLaren F1 black edition",
          img:"https://assets.digitalcontent.marksandspencer.app/images/w_2560,q_auto,f_auto/SD_04_T87_7867C_Y0_X_EC_90/Cotton-Rich-McLaren-Hoodie-6-16-Yrs-",
          descripcion:"Buzo en conmemoración del campeonato mundial",
          precio: 45000,
          categoria:"Buzo",
          equipo: "McLaren"
        },
        {
          id:46,
          nombre:"Camiseta de equipo McLaren F1 2025",
          img:"https://armadioindia.com/cdn/shop/files/1-Recovered1_e1fa299b-cf42-45e1-b967-82dde9ab94f6.jpg?v=1753527751&width=1445",
          descripcion:"Camiseta oficial para la temporada 2025",
          precio:25000,
          categoria:"Camiseta",
          equipo:"McLaren"
        },
        {
          id: 47,
          nombre:"McLaren F1 MCL38 escala 1:43",
          img:"https://silverstonemuseum.store/wp-content/uploads/2025/10/Lando-Norris-McLaren-F1-MCL38-Model-Car-with-Helmet-%E2%80%93-1-43-Scale-768x1024.jpg",
          descripcion:"Coche de Lando Norris en replica a escala 1:43",
          precio:60000,
          categoria:"Replica a escala",
          equipo: "McLaren"
        },
        {
          id: 48,
          nombre: "Camiseta alternativa McLaren F1 2025",
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlqF4FS4qoc7GNe6Yhay4iDwMpEW-eWpmo-g&s",
          descripcion:"Segunda equipación del equipo 'Papaya'",
          precio: 25000,
          categoria:"Camiseta",
          equipo:"McLaren"
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
          precio: 30000,
          categoria: "Camiseta",
          equipo: "Ferrari"
        },
        {
          id: 18,
          nombre: "Gorra LH44 Ferrari",
          img: "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2025-team-lewis-hamilton-cap-white_ss5_p-202358979+u-gq5oeycuix4ewgkqpq4f+v-cbvk6bvslonb7jmwstao.jpg?_hv=2&w=532",
          descripcion: "Gorra Lewis Hamilton white edition",
          precio: 20000,
          categoria: "Gorra",
          equipo: "Ferrari"
        },
        {
          id: 19,
          nombre: "Camiseta Ferrari",
          img: "https://www.rallymerchandise.eu/hpeciai/36e64ae20629306bc78500b3326fd763/eng_pl_2024-Ferrari-F1-Mens-Monza-GP-T-Shirt-21373_2.jpg",
          descripcion: "Edicion especial Monza 2024",
          precio: 35000,
          categoria: "Camiseta",
          equipo: "Ferrari"
        },
        {
          id: 20,
          nombre: "Buzo frizza Ferrari",
          img: "https://formulaentreamigos.com/wp-content/uploads/2025/02/701232805001_PP_1_FERRARI_763941_01-scaled.jpg",
          descripcion: "Estilo frizado 2025",
          precio: 40000,
          categoria: "Buzo",
          equipo: "Ferrari"
        },
        {
          id: 37,
          nombre: "Campera PUMA bomber Ferrari",
          img: "https://images.precialo.com/products/campera-puma-estilo-bomber-para-hombre-scuderia-ferrari-team-en-talle-m-en-rojo/79c4dc75-a977-485a-b612-d703303212a4.jpeg",
          descripcion: "El Rosso Corsa y el negro le dan el toque del automovilismo",
          precio: 50000,
          categoria: "Campera",
          equipo: "Ferrari"
        },
        {
          id: 38,
          nombre: "Camiseta especial Ferrari Monza 2025",
          img: "https://store.ferrari.com/dw/image/v2/BGDG_PRD/on/demandware.static/-/Sites-48/default/dwfbf13832/images/zoom/LA0AEf_02_1.jpg?strip=false",
          descripcion:"Con tonos azules, homenaje al Campeonato de Lauda en 1974",
          precio: 35000,
          categoria: "Camiseta",
          equipo: "Ferrari"
        },
        {
          id:39,
          nombre: "Gorra Ferrari Lec Ham",
          img: "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-puma-classic-cap-black-kids_ss5_p-202359035+u-tseizphkjogea0a7ug3v+v-kqgvsvezjgh2lhhyu8rj.jpg?_hv=2&w=532",
          descripcion: "Version color negro",
          precio: 10000,
          categoria: "Gorra",
          equipo: "Ferrari"
        },
        {
          id: 40,
          nombre: "Camiseta Ferrari temporada 2023",
          img: "https://cdn-1.motorsport.com/images/amp/6gpAkej0/s1000/teamwear-ferrari-2023-1.jpg",
          descripcion: "De un año agridulce para la escuderia",
          precio: 25000,
          categoria: "Camiseta",
          equipo: "Ferrari"
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
          precio: 20000,
          categoria: "Camiseta",
          equipo: "Red Bull"
        },
        {
          id: 22,
          nombre: "Buzo Red Bull Racing 2022'",
          img: "https://m.media-amazon.com/images/I/61TdyCu5iaL._AC_UY1000_.jpg",
          descripcion: "Mercancia oficial para la temporada 2022",
          precio: 35000,
          categoria: "Buzo",
          equipo: "Red Bull"
        },
        {
          id: 23,
          nombre: "Remera RB Japanese GP",
          img: "https://www.cmcmotorsports.com/cdn/shop/files/TU14431-001-01.jpg?v=1743189466",
          descripcion: "Camiseta edicion especial GP de Japon 2025",
          precio: 30000,
          categoria: "Camiseta",
          equipo: "Red Bull"
        },
        {
          id: 24,
          nombre: "Red Bull F1 cap",
          img: "https://tracksidegear.com/cdn/shop/files/RedbullcapF1Team6066922399SEVENTYhatnewera_1024x.jpg?v=1753418640",
          descripcion: "Gorra Max Verstappen N°1",
          precio: 15000,
          categoria: "Gorra",
          equipo: "Red Bull"
        },
        {
          id: 41,
          nombre: "Red Bull Racing sueter",
          img:"https://fueler.store/cdn/shop/files/red-bull-racing-2025-quarter-zip-sweatshirt-fuelertm-tu9871-020-s-fueler-store-82638.jpg?v=1759273438&width=3000",
          descripcion:"Buzo estilo cierre alto azul",
          precio: 25000,
          categoria: "Buzo",
          equipo: "Red Bull"
        },
        {
          id: 42,
          nombre: "Red Bull white cap",
          img:"https://images.footballfanatics.com/red-bull-racing/red-bull-racing-new-era-9seventy-special-edition-japan-gp-cap-white_ss5_p-202169074+u-mntstj8jy6mhrhzr5jps+v-fwheiwnel5id62h1htgk.jpg?_hv=2&w=532",
          descripcion:"Gorra ambiente blanca",
          precio:15000,
          categoria: "Gorra",
          equipo: "Red Bull"
        },
        {
          id: 43,
          nombre:"Campera de lluvia Red Bull Racing",
          img:"https://m.media-amazon.com/images/I/71gTGBgAg7L.jpg",
          descripcion: "Edicion temporada F1 2023",
          precio: 50000,
          categoria: "Campera",
          equipo:"Red Bull"
        },
        {
          id: 44,
          nombre: "Buzo Red Bull gris F1 2024",
          img:"https://i.ebayimg.com/images/g/7iAAAOSwyvhj7sI4/s-l400.jpg",
          descripcion:"Versión en color grisaseo del modelo",
          precio:30000,
          categoria:"Buzo",
          equipo:"Red Bull"
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
          precio: 20000,
          categoria: "Camiseta",
          equipo: "Mercedes"
        },
        {
          id: 26,
          nombre: "Camiseta de equipo 24'",
          img: "https://fanabox.com/cdn/shop/files/701227950001_pp_02_MercedesFormula1.jpg?v=1741649132&width=1080",
          descripcion: "Puma x Mercedes White",
          precio: 30000,
          categoria: "Camiseta",
          equipo: "Mercedes"
        },
        {
          id: 27,
          nombre: "Chaqueta Mercedes F1",
          img: "https://m.media-amazon.com/images/I/71cVy62YW4L._UY1000_.jpg",
          descripcion: "Edicion SoftShell x Puma",
          precio: 40000,
          categoria: "Campera",
          equipo:"Mercedes"
        },
        {
          id: 28,
          nombre: "George Russell 63 cap",
          img: "https://starniza.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-12-at-4.36.58-PM.jpeg",
          descripcion: "Replica oficial",
          precio: 15000,
          categoria: "Gorra",
          equipo: "Mercedes"
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