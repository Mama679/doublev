import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {of,Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario:any=null;
  

  constructor(
    private http:HttpClient
    ) { }

    buscarUsuario(usuario:string):Observable<any>{
      let url = `https://api.github.com/search/users?q=${usuario}`;
      return this.http.get(url).pipe(
        map((resp:any) =>{
          return resp;
        }),
        catchError((error:any) =>{
          return of(error);
        })
      );
    }

    consultarUsuario(usuario:string):Observable<any>{
      let url =`https://api.github.com/users/${usuario}`;
      return this.http.get(url).pipe(
        map((resp:any) =>{
          return resp;
        }),
        catchError((error:any) =>{
          return of(error);
        })
      );
    }
}
