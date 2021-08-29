import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { InicioComponent } from './inicio/inicio.component';

import { AuthGuard } from './_helpers';


const routes: Routes = [
{ path: '', component: InicioComponent, canActivate: [AuthGuard] },
{ path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]},
{ path: 'login', component: IndexComponent },

{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
