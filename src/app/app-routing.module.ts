import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'usuario',
    loadChildren:() => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  },
  {
    path:'',
    redirectTo:'/',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'error/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
