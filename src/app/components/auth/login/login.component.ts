import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {};
  error: string;
  constructor(
    public router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this.auth.emailSignIn(this.user)
      .then(res => {
        this.auth.getUserDetails(res.user.uid);
        this.router.navigate(['/']);
      })
      .catch(err => console.log(err));
  }

  goToPartners() {
    this.router.navigate(['join']);
  }

}
