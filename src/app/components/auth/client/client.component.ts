import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  user = {};
  error: string;
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this.auth.emailSignup(this.user)
      .then(res => {
        if (res) {
          this.createUser(res.user.uid, this.user);
        }
      })
      .catch(err => {
        if (err && err.code === 'auth/email-already-in-use') {
          this.error = err.message;
        } else {
          this.error = 'Something went wrong. Please try again!';
        }
      });
  }

  /**
   * Create new user document
   *
   * @param uid - userId
   * @param user - userDetails
   */
  createUser(uid, user) {
    const { email, name, phone } = user;
    const userDetails = {
      name,
      email,
      phone
    };

    this.auth.newUser(uid, userDetails)
      .then(res => {
        console.log({ newUserResponse: res });
      })
      .catch(err => console.log(err));
  }

}
