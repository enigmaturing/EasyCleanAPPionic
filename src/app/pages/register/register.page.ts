import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertsService } from 'src/app/services/alerts.service';
import { UserCreate } from '../../models/user-create';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {} as UserCreate;
  repeatPassword: string;

  constructor( private router: Router,
               private authService: AuthService,
               private alerts: AlertsService) { }

  register() {
    if (this.repeatPassword !== this.user.password) {
      this.alerts.presentAlert('Attention', 'Passwords do not match.  ' +
      'Please enter password again.', '', 'OK');
      this.user.password = '';
      this.repeatPassword = '';
      return;
    }
    this.authService.register(this.user).subscribe(next => {
      this.login();
    }, error => {
      this.alerts.presentAlert('Attention', 'Not possible to register. ' +
      'This email addreess already exists for another account', '', 'OK');
      this.user.password = '';
    });
  }

  login() {
    this.authService.login(this.user).subscribe(next => {
      this.router.navigate(['/menu/my-profile']);
    }, error => {
      this.alerts.presentAlert('Attention', 'Not possible to log user in', '', 'OK');
      this.router.navigate(['/register']);
    });
  }

  ionViewWillEnter() {
    this.user.password = '';
  }

  ngOnInit() {
  }

}