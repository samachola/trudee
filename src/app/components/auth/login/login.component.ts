import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };
  error: string;
  constructor(
    public router: Router,
    public auth: AuthService,
    public afAuth: AngularFireAuth,
  ) { }

  ngOnInit() {
    localStorage.clear();
  }

  async onSubmit() {
    const { email, password } = this.user;
    await this.afAuth.auth.signInWithEmailAndPassword(email, password);

    const currentUser = this.afAuth.auth.currentUser;
    if (currentUser.email === email) {
      this.auth.getUserDetails(currentUser.uid);
      this.router.navigate(['/']);
    }
  }

  goToPartners() {
    this.router.navigate(['join']);
  }

}
