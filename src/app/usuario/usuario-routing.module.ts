import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedadComponent } from './busquedad/busquedad.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path:"",
    component:UsuarioComponent,
    children:[
      {
        path:'buscar',
        component:BusquedadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
