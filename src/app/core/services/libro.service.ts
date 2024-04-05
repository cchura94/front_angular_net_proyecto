import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Libro } from '../interfaces/libro';
import { Observable } from 'rxjs';

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

  funPrestarLibro(obj: any):Observable<any>{
    let params = new HttpParams();
    params = params.append('userId', obj.userId)
    params = params.append('bookId', obj.bookId)

    return this.http.post(`${this.urlBase}/Library/OrderBook`, {}, {params});
  }

  
}
