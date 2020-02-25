import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'url';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  model: any = {};

  constructor( private router: Router) { }

  login(form: Form) {
    console.log(this.model.email);
    console.log(this.model.password);
    this.model.email = '';
    this.model.password = '';
    this.router.navigate(['/menu/dashboard']);
  }

  ngOnInit() {
  }

}
