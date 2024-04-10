import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { User } from '../interfaces/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlBase: string = environment.servidor1;
  http = inject(HttpClient)

  constructor() { }

  funListar(){
    return this.http.get<User[]>(`${this.urlBase}/User`);
  }

  funGuardar(datos: any){
    return this.http.post(`${this.urlBase}/User`, datos);
  }

  funMostrar(id:number){
    return this.http.get(`${this.urlBase}/User/${id}`);
  }

  funModificar(id:number, datos: any){
    return this.http.put(`${this.urlBase}/User/${id}`, datos);
  }

  funEliminar(id:number){
    return this.http.delete(`${this.urlBase}/User/${id}`);
  }
}
