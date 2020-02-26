import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  model: any = {};

  constructor( private router: Router,
               private authService: AuthService,
               private alertController: AlertController,
               private alerts: AlertsService) { }

  login(form: Form) {
    this.authService.login(this.model).subscribe(next => {
      this.router.navigate(['/menu/dashboard']);
    }, error => {
      this.alerts.presentAlert('Attention', 'Wrong password or email', '', 'OK');
    });
    this.model.email = '';
    this.model.password = '';
  }

  ngOnInit() {
  }

}
