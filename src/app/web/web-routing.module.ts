import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { BlogComponent } from './blog/blog.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { WebComponent } from './web.component';
import { authGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
        // canActivate: [authGuard]
      },
      {
        path: 'nosotros',
        component: NosotrosComponent,
        // canActivate: [authGuard]
      },
      {
        path: 'blog',
        component: BlogComponent,
        // canActivate: [authGuard]
      },
      {
        path: 'galeria',
        component: GaleriaComponent,
        canActivate: [authGuard]
      },
      {
        path: 'servicios',
        component: ServiciosComponent,
        canActivate: [authGuard]
      }
    ]
  }
  
  
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class WebRoutingModule { }
