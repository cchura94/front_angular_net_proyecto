import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlBase: string = environment.servidor1;
  http = inject(HttpClient)

  constructor() { }

  funListar(){
    return this.http.get<Categoria[]>(`${this.urlBase}/Library/GetAllCategories`);
  }

  funGuardar(datos: any){
    return this.http.post(`${this.urlBase}/Library/AddCategory`, datos);
  }

  funMostrar(id:number){
    return this.http.get(`${this.urlBase}/Library/ShowCategory/${id}`);
  }

  funModificar(id:number, datos: any){
    return this.http.put(`${this.urlBase}/Library/UpdateCategory/${id}`, datos);
  }

  funEliminar(id:number){
    return this.http.delete(`${this.urlBase}/Library/UpdateCategory/${id}`);
  }

}
