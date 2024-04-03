import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from '../core/guards/auth.guard';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { LibroComponent } from './components/libro/libro.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [authGuard]
      },
      {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [authGuard]
      },
      {
        path: 'categoria',
        component: CategoriaComponent,
        canActivate: [authGuard]
      },
      {
        path: 'libros',
        component: LibroComponent,
        canActivate: [authGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
