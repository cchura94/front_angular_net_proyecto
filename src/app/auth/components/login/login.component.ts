import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  loginForm: FormGroup;
  authService = inject(AuthService)
  router = inject(Router)

  constructor(fb: FormBuilder){
    this.loginForm = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [Validators.required])
    });
  }

  login(){
    this.authService.loginConNet(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem("access_token", res)

        this.router.navigate(["/admin/perfil"]);
      }
    )
  }


}
