import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProductoComponent } from './paginas/producto/producto.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { NuestraempresaComponent } from './paginas/nuestraempresa/nuestraempresa.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
import { CategoriasComponent } from './paginas/categorias/categorias.component';

export const routes: Routes = [
    {path: '', redirectTo: '/inicio',pathMatch:'full'},
    {path: 'inicio',component:InicioComponent},
    {path: 'producto', component:ProductoComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: 'categorias', component:CategoriasComponent},
    {path: 'nuestraempresa', component:NuestraempresaComponent},
    {path: 'carrito', component:CarritoComponent},
    {path: 'favoritos', component:FavoritosComponent}
];
