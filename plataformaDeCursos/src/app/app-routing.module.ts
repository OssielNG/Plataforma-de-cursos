import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { MenuAlumnosComponent } from './menu-alumnos/menu-alumnos.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'registro-usuario', component: RegistroUsuarioComponent,
  },
  {
    path: 'menu-alumnos', component: MenuAlumnosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
