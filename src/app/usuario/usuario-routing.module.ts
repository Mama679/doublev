import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedadComponent } from './busquedad/busquedad.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConsultarComponent } from './consultar/consultar.component';

const routes: Routes = [
  {
    path:"",
    component:UsuarioComponent,
    children:[
      {
        path:'buscar',
        component:BusquedadComponent
      },
      {
        path:'consultar',
        component:ConsultarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
