import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {};
  error: string;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
  }

  goToPartners() {
    this.router.navigate(['join']);
  }

}
