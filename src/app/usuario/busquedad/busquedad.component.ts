import { Component } from '@angular/core';
import { UsuarioService } from '../servicio/usuario.service';

@Component({
  selector: 'app-busquedad',
  templateUrl: './busquedad.component.html',
  styleUrls: ['./busquedad.component.css']
})
export class BusquedadComponent {
  nombreusuario:string = '';
  respUser:any = null;

  constructor(private userServicio:UsuarioService){}

  buscar(){
    if(this.nombreusuario.trim().length < 4){
      this.respUser=null;
      return;
    }

    if(this.nombreusuario === 'doublevpartners'){
      this.respUser=null;
      return;
    }

    this.userServicio.buscarUsuario(this.nombreusuario).subscribe((resp:any) =>{
      if(!resp.error)
       {
        this.respUser = resp.items;  
        console.log(resp.items);
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
