import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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

    enviarGuardarDatos(form:NgForm){
        if(form.valid){
            this.dialogRef.close(form.value)
        }
    }
}
