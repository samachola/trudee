import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/widgets/header/header.component';
import { FooterComponent } from './components/widgets/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import { RegisterComponent } from './components/auth/register/register.component';

import { AuthService } from './services/auth/auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { PartnersService } from './services/partners/partners.service';
import { GooglePlacesDirective } from './directives/google-places.directive';
import { ClientComponent } from './components/auth/client/client.component';
import { ServicesComponent } from './components/services/services.component';
import { CategoryService } from './services/categories/category.service';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    LoginComponent,
    AuthComponent,
    RegisterComponent,
    GooglePlacesDirective,
    ClientComponent,
    ServicesComponent,
    ServiceProviderComponent,
    LogoutComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    GooglePlaceModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    PartnersService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
