import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../../../core/interfaces/User';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit{

  userService = inject(UserService)
  
  lista_usuarios: User[] =[{email: "prueba", firstName: "prueba f", lastName: "prueba ap", mobileNumber: "32454", password: "453543"}]
  lista_ordenes: any[] = [];
  mensaje: any = {};
  
  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.funListar().subscribe(
      (res: User[]) => {
        this.lista_usuarios = res
      }
    )
  }

  funUsuarioSeleccionado(user: User){
    console.log(user)
    this.getOrdenPorUser(user)
  }

  getOrdenPorUser(user: User){
    this.userService.funGetOrdenUser(user.id as number).subscribe(
      (res: any) => {
        this.lista_ordenes = res
        console.log(this.lista_ordenes)
      }
    )
  }
}
