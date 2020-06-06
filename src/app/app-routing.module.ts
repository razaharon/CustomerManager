import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/components/customers/customers.component';
import { LoginComponent } from './user/components/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AboutComponent } from './shared/components/about/about.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'customers'},
  {path: 'customers', component: CustomersComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
