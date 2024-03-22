import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';

const modulos = [
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modulos
  ],
  exports: [
    modulos
  ]
})
export class MaterialModule { }
