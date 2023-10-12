import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../servicio/usuario.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent {
  nombreusuario:string = '';
  respUser:any = null;

  constructor(private userService:UsuarioService,private toastrService: ToastrService){}

  consultar(){
    if(this.nombreusuario.trim().length < 4){
      this.respUser=null;
      this.toastrService.error("Ingrese usuario con longitud de mayor de 4 caracteres.", "Error!", {closeButton: true});
      return;
    }

    this.userService.consultarUsuario(this.nombreusuario).subscribe((resp:any) =>{
      if(!resp.error)
       {
        this.respUser=resp;
        console.log(resp);
       }
       else
       {           
          if(!resp.error.status)
          {
            console.log(resp);           
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
