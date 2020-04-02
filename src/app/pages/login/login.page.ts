import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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
               private alerts: AlertsService) { }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.router.navigate(['/menu/dashboard']);
    }, error => {
      this.alerts.presentAlert('Attention', 'Wrong password or email', '', 'OK');
      this.model.password = '';
    });
  }

  ionViewWillEnter() {
    this.model.password = '';
  }

  ngOnInit() {
  }

}
