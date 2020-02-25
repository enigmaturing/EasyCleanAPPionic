import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'url';
import { Form } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  model: any = {};

  constructor( private router: Router,
               private authService: AuthService) { }

  login(form: Form) {
    this.authService.login(this.model).subscribe(next => {
      this.router.navigate(['/menu/dashboard']);
    }, error => {
      console.log('logged in NOT ok');
    });
    this.model.email = '';
    this.model.password = '';
  }

  ngOnInit() {
  }

}
