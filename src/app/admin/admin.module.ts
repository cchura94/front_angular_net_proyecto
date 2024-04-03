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


@NgModule({
  declarations: [
    PerfilComponent,
    DashboardComponent,
    CategoriaComponent,
    LibroComponent,
    DialogLibroComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    MaterialModule
  ]
})
export class AdminModule { }
