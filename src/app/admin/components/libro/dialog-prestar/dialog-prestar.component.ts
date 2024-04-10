import { Component, Inject, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../../core/services/user.service';
import { User } from '../../../../core/interfaces/User';

@Component({
  selector: 'app-dialog-prestar',
  templateUrl: './dialog-prestar.component.html',
  styleUrl: './dialog-prestar.component.scss',
})
export class DialogPrestarComponent{
  userService = inject(UserService)

  users: User[] = []

  constructor(
    public dialogRef: MatDialogRef<DialogPrestarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.getUsers()
  }

  getUsers() {
    this.userService.funListar().subscribe(
      (res:User[]) => {
        this.users = res;
      }
    )
  }

  cerrarDialog() {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.dialogRef.close(form.value);
    }
  }
}
