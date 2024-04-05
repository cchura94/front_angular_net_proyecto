import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { MaterialModule } from '../material/material.module';
import { LibroComponent } from './components/libro/libro.component';
import { DialogLibroComponent } from './components/libro/dialog-nuevo-libro/dialog-libro.component';
import { FormsModule } from '@angular/forms';
import { DialogPrestarComponent } from './components/libro/dialog-prestar/dialog-prestar.component';


@NgModule({
  declarations: [
    PerfilComponent,
    DashboardComponent,
    CategoriaComponent,
    LibroComponent,
    DialogLibroComponent,
    DialogPrestarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    MaterialModule,
    FormsModule
  ]
})
export class AdminModule { }
