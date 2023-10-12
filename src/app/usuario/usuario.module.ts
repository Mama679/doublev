import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BusquedadComponent } from './busquedad/busquedad.component';
import { UsuarioComponent } from './usuario/usuario.component';




@NgModule({
  declarations: [
    BusquedadComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    BusquedadComponent,
    UsuarioComponent
  ],
  providers:[
    
  ]
})
export class UsuarioModule { }
