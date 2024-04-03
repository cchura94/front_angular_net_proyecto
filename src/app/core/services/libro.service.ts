import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../interfaces/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  urlBase: string = environment.servidor1;
  http = inject(HttpClient)

  constructor() { }

  funListar(){
    return this.http.get<Libro[]>(`${this.urlBase}/Library/GetAllBooks`);
  }

  funGuardar(datos: any){
    return this.http.post(`${this.urlBase}/Library/AddBook`, datos);
  }

  
}
