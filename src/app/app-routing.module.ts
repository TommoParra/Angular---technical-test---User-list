import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' } // Add this line
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }