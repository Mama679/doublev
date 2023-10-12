import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BusquedadComponent } from './busquedad/busquedad.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PaginarComponent } from './paginar/paginar.component';





@NgModule({
  declarations: [
    BusquedadComponent,
    UsuarioComponent,
    PaginarComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  exports:[
    BusquedadComponent,
    UsuarioComponent,
    PaginarComponent
  ],
  providers:[
    
  ]
})
export class UsuarioModule { }
