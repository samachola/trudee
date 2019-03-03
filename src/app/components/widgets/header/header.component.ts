import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

export interface User {
  name: string;
  email: string;
  phone: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  // isLoggedIn = false;
  currentUser: any;
  currentUserSubscription: Subscription;

  name: string;
  constructor(public auth: AuthService, public router: Router, public afAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.currentUser = this.auth.getCurrentUserDetails();
  }

  ngOnDestroy() {
  }

  get isLoggedIn() {
    return this.afAuth.auth.currentUser;
  }

  /**
   * Logout user and redirect to login page
   */
  logout() {
    console.log('we logging out');
    this.auth.userSignOut()
      .then(() => {
        localStorage.clear();
        // this.isLoggedIn = false;

        // TODO: create a dedicate logout route.
        this.router.navigate(['/logout']);
      })
      .catch(err => console.log(err));
  }

}
