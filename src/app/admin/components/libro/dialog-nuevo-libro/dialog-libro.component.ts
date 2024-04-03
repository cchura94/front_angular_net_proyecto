import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-libro',
  templateUrl: './dialog-libro.component.html',
})
export class DialogLibroComponent {

    constructor(public dialogRef: MatDialogRef<DialogLibroComponent>){}

    cerrarDialog(){
        this.dialogRef.close()
    }

    enviarGuardarDatos(){
        this.dialogRef.close({titulo: "Prueba datos hijo", otro: "otro dato"})
    }
}
