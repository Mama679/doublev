import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../servicio/usuario.service';
import { IPerfil } from 'src/app/models/perfil';

@Component({
  selector: 'app-busquedad',
  templateUrl: './busquedad.component.html',
  styleUrls: ['./busquedad.component.css']
})
export class BusquedadComponent implements OnInit {
  nombreusuario:string = '';
 perfil:IPerfil={
  login:'',
  seguidores:0
 }
  respUser:any[] = [];
  seguidores:any[] = [];

  nombres:string[]=[];
  numeros:number[]=[];

  
  public page!: number;

  constructor(
    private userServicio:UsuarioService, 
    private toastrService: ToastrService){
   
  }
  ngOnInit(): void {
   
  } 
  buscar(){
    this.respUser=[];
    this.seguidores=[];
    this.nombres=[];
    this.numeros=[];
    if(this.nombreusuario.trim().length < 4){
      this.respUser=[];
      this.toastrService.error("Ingrese usuario con longitud de mayor de 4 caracteres.", "Error!", {closeButton: true});
      return;
    }

    if(this.nombreusuario === 'doublevpartners'){
      this.toastrService.error("Usuario no valido.", "Error!", {closeButton: true});
      this.respUser=[];
      return;
    }

    this.userServicio.buscarUsuario(this.nombreusuario).subscribe((resp:any) =>{
      if(!resp.error)
       {
        this.respUser = resp.items;  
       }
       else
       {           
          if(!resp.error.status)
          {
            console.log(resp.message);           
          }
          else
          {
            let resultado = JSON.stringify(resp.message);
            console.log(resultado);
          }
         
       }
    });
  }

  grafico(){
    let datosSe:any[]=this.respUser.slice(0,9);
    datosSe.forEach(dato =>{
      this.userServicio.consultarUsuario(dato.login).subscribe((resp:any) =>{
        if(!resp.error)
         {
          this.perfil={
            login:resp.login,
            seguidores:resp.followers
          }
          this.seguidores.push(this.perfil);
          this.nombres.push(this.perfil.login);
          this.numeros.push(this.perfil.seguidores);
         }
         else
         {           
            if(!resp.error.status)
            {
              console.log(resp.message);           
            }
            else
            {
              let resultado = JSON.stringify(resp.message);
              console.log(resultado);
            }
           
         }
      });
    })
  }
}
