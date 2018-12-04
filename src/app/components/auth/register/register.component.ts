import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {};
  categories = [];
  category: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
  }

  onChange(event): void {
    this.category = event.target.value;
  }

}
