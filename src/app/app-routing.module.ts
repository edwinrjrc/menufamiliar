import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { InicioComponent } from './inicio/inicio.component';

import { RecetasComponent } from './inicio/recetas/recetas.component';

import { AuthGuard } from './_helpers';


const routes: Routes = [
{ path: '', component: InicioComponent, canActivate: [AuthGuard], pathMatch: 'full' },
{ path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]},
{ path: 'recetas', component: RecetasComponent, canActivate: [AuthGuard]},
{ path: 'login', component: IndexComponent },
{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
