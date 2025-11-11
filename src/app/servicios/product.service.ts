import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Producto } from '../model/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // URL base del modulo de productos en la API 

  private apiUrl = 'http://localhost/api_proyecto/public/products';

  constructor(private http: HttpClient) {}

  //construye las cabeceras HTTP necesarias para las solicitudes protegidas
  //si existe un token en localStorage lo incluye como cabecera Authorization

  private getHeaders():HttpHeaders{
    const token = localStorage.getItem('token'); 
    let headers = new HttpHeaders({
      'authorization':token ? `Bearer ${token}` : ''
    })
    return headers
  }

  //Obtiene una lista completa de productos desde la API 
  //Es una  ruta publica y no requiere token 
  getProducts():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.apiUrl}`)
    .pipe(catchError(this.HandleError));
  }

  //Obtiene un producto especifico segun su identificador 
  getProductsByIde(id:number):Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`)
    .pipe(catchError(this.handleError));
  }
}
