import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // version 17 Angular
  // http2 = inject(HttpClient)
  urlBase: string = environment.servidor1;

  constructor(private _http: HttpClient) { }

  loginConNet(datos: any){
    return this._http.post(`${this.urlBase}/User/Login`, datos)
  }

  registroConNet(datos: any){
    return this._http.post(`${this.urlBase}/User/Register`, datos)
  }

  getPerfil(){
    return this._http.get(`${this.urlBase}/v1/auth/profile`)
  }

}
