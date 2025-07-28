import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from '../../model/productos.model';
import { CarritoService } from '../../servicios/carrito.service';


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
      nombre:"Auriculares AIWA",
      descripcion:"Auriculares Bluetooth Tipo Vincha (Bt301N-B)",
      img:"https://acdn-us.mitiendanube.com/stores/884/018/products/gamma-hogar-2022-10-25t104326-7711-f545577cf5cc3a201b16667059054363-1024-1024.jpg",
      precio:45000
    },
    {
      id:2,
      nombre:"Televisor Smart TV UHD 4K Samsung 50 2025",
      descripcion:"El televisor con mas aura de la historia, con ultra definicion",
      img:"https://images.fravega.com/f300/eac2fd28fc788a516271773cecb1e8f0.jpg.webp",
      precio:130000
    },
    {
      id:3,
      nombre:"PC GAMER INTEL I7 10700 RTX 3060 RAM 16GB SSD 480GB",
      descripcion:"Computadora gamer con todos los chiches para los gordos viciosos",
      img:"https://electropc.com.ar/wp-content/uploads/DISENO-AVANZADO-PAGINA-jpg.webp",
      precio:200000
    },
    {
      id:4,
      nombre:"",
      descripcion:"",
      img:"https://www.megatone.net/Images/Articulos/zoom/209/KIT1657SSG.jpg?version=35",
      precio: 20000
    }
  ]

  constructor(private carritoService: CarritoService){ }
  agregar(product: Producto){
    this.carritoService.agregarAlCarrito(product)
    alert('Producto agregado al carrito')
  }
}
