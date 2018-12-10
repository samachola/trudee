import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ClientComponent } from './components/auth/client/client.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: AuthComponent },
  { path: 'join', component: RegisterComponent },
  { path: 'customer-signup', component: ClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
