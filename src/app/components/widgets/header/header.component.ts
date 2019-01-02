import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { Subscription } from 'rxjs';

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

  isLoggedIn = false;
  currentUser: User;
  currentUserSubscription: Subscription;

  name: string;
  constructor(public auth: AuthService, public router: Router) {
  }

  ngOnInit() {
    this.currentUserSubscription = this.auth.currentUser.subscribe(user => {
      this.currentUser = user;
      if (this.currentUser) {
        this.isLoggedIn = true;
      }
    });
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }

  /**
   * Logout user and redirect to login page
   */
  logout() {
    console.log('we logging out');
    this.auth.userSignOut()
      .then(() => {
        localStorage.clear();
        this.currentUserSubscription.unsubscribe();
        this.isLoggedIn = false;

        // TODO: create a dedicate logout route.
        this.router.navigate(['/logout']);
      })
      .catch(err => console.log(err));
  }

}
