import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProductoComponent } from './paginas/producto/producto.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { NovedadesComponent } from './paginas/novedades/novedades.component';
import { NuestraempresaComponent } from './paginas/nuestraempresa/nuestraempresa.component';

export const routes: Routes = [
    {path: '', redirectTo: '/inicio',pathMatch:'full'},
    {path: 'inicio',component:InicioComponent},
    {path: 'producto', component:ProductoComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: 'novedades', component:NovedadesComponent},
    {path: 'nuestraempresa', component:NuestraempresaComponent}
];
