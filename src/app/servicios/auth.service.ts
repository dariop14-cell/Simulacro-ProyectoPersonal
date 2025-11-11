import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private apiUrl = 'http://localhost/api_proyecto/public/users';

  constructor(private http:HttpClient) {}
  //envia las credenciales al backend y retorna la respuesta del servidor 
  login(datos:any):Observable<any>{
    return this.http.post(`$(this.apiUrl}/login`,datos);
  }

  //Envia los datos del nuevo usuario al backend para registrar una cuenta
  register(datos:any):Observable<any>{
    return this.http.post(`$this.apiUrl}/register`,datos);
  }

  //guarda el token y el rol del usuario en el almacenamiento local
  guardarSesion(token:string, rol: string){
    localStorage.setItem('token',token);
    localStorage.setItem('rol',rol);
  }

  obtenerRol():string | null{
    return localStorage.getItem('rol');
  }

  esAdmin():boolean {
    return localStorage.getItem('rol')==='admin';
  }

  //elimina los datos de la sesion almacenados
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
  }
}
