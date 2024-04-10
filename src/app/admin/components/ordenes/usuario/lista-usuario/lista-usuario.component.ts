import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../../core/interfaces/User';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.scss'
})
export class ListaUsuarioComponent {
  @Input() usuarios: User[] = [];
  @Output() usuarioSeleccionado = new EventEmitter<any>()

  funEnviarAlPadre(){
    this.usuarioSeleccionado.emit({mensaje: "Este es un mensaje desde el componente Hijo"})
  }

}
