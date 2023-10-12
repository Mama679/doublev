import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../servicio/usuario.service';

@Component({
  selector: 'app-busquedad',
  templateUrl: './busquedad.component.html',
  styleUrls: ['./busquedad.component.css']
})
export class BusquedadComponent implements OnInit {
  nombreusuario:string = '';
  respUser:any = null;
  public page!: number;

  constructor(
    private userServicio:UsuarioService, 
    private toastrService: ToastrService){
   
  }
  ngOnInit(): void {
   
  }

 
  buscar(){
    if(this.nombreusuario.trim().length < 4){
      this.respUser=null;
      this.toastrService.error("Ingrese usuario con longitud de mayor de 4 caracteres.", "Error!", {closeButton: true});
      return;
    }

    if(this.nombreusuario === 'doublevpartners'){
      this.toastrService.error("Usuario no valido.", "Error!", {closeButton: true});
      this.respUser=null;
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
}
