import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import {RegistrationComponent} from './registration/registration/registration.component'
const routes: Routes = [
    {
      path:'login',component: LoginComponent
    },
    {
      path: 'registration', component: RegistrationComponent
    },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
