import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
    const user = this.auth.isLoggedIn();
    if (user) {
      this.isLoggedIn = true;
    }

    console.log(user);
    console.log(this.isLoggedIn);
  }

  /**
   * Logout user and redirect to login page
   */
  logout() {
    console.log('we logging out');
    this.auth.userSignOut()
      .then(() => this.router.navigate(['/login']))
      .catch(err => console.log(err));
  }

}
