import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';
// import {MatButtonModule} from '@angular/material/button';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    MaterialModule
    // MatButtonModule,
    // MatButtonToggleModule
  ]
})
export class AuthModule { }
