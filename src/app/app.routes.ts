import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProductoComponent } from './paginas/producto/producto.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';

export const routes: Routes = [
    {path: '', redirectTo: '/inicio',pathMatch:'full'},
    {path: 'inicio',component:InicioComponent},
    {path: 'producto', component:ProductoComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: 'ofertas', component:OfertasComponent}
];
