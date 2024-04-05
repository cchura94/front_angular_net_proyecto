import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-prestar',
  templateUrl: './dialog-prestar.component.html',
  styleUrl: './dialog-prestar.component.scss',
})
export class DialogPrestarComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogPrestarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  cerrarDialog() {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.dialogRef.close(form.value);
    }
  }
}
