import { Component } from '@angular/core';
import { User } from '../../../../core/interfaces/User';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {

  lista_usuarios: User[] =[{email: "prueba", firstName: "prueba f", lastName: "prueba ap", mobileNumber: "32454", password: "453543"}]
  mensaje: any = {};

  funPadre(dato: any){
    this.mensaje = dato
  }
}
