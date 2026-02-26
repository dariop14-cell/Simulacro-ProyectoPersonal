import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProductoComponent } from './paginas/producto/producto.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
import { NuestraempresaComponent } from './paginas/nuestraempresa/nuestraempresa.component';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { TicketComponent } from './paginas/ticket/ticket.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { AdminGuard } from './guards/admin.guard';
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { CompraComponent } from './paginas/compra/compra.component';

export const routes: Routes = [
    {path: '', redirectTo: '/inicio',pathMatch:'full'},
    // Ruta comodín para cualquier ruta inexistente

    {path:'compra',component:CompraComponent},
    {path: 'inicio',component:InicioComponent},
    {path: 'producto', component:ProductoComponent},
    {path: 'categorias', component:CategoriasComponent},
    {path: 'nuestraempresa', component:NuestraempresaComponent},
    {path: 'carrito', component:CarritoComponent},
    {path: 'favoritos', component:FavoritosComponent},
    {
    path: 'ticket/:id',
    loadComponent: () =>
      import('./paginas/ticket/ticket.component')
      .then(m => m.TicketComponent)
  },
    {path: 'admin', 
    component:AdminComponent,
    canActivate: [AdminGuard]
    },
    {path: 'registro', component:RegistroComponent},
    {path: 'login', component:LoginComponent}
];
