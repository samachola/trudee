import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ClientComponent } from './components/auth/client/client.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';
import { LogoutComponent } from './components/auth/logout/logout.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: AuthComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'join', component: RegisterComponent },
  { path: 'customer-signup', component: ClientComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:id', component: ServiceProviderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
