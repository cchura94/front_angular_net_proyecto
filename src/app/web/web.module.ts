import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { WebComponent } from './web.component';
import { MaterialModule } from '../material/material.module';
// import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    WebComponent],
  imports: [
    CommonModule,
    WebRoutingModule,
    // MatButtonModule
    MaterialModule
  ]
})
export class WebModule { }
