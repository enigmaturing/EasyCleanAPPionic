import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertsService } from 'src/app/services/alerts.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  optionsOk: AnimationOptions = {
    path: '/assets/lottie/animation_ok.json',
    autoplay: false,
    loop: false
  };

  optionsNok: AnimationOptions = {
    path: '/assets/lottie/animation_nok.json',
    autoplay: false,
    loop: false
  };

  animationItemOk: AnimationItem;
  animationItemNok: AnimationItem;
  showLoadingSpinner = false;

  animationOkCreated(animationItem: AnimationItem): void {
    this.animationItemOk = animationItem;
    this.animationItemOk.hide();
  }

  animationNokCreated(animationItem: AnimationItem): void {
    this.animationItemNok = animationItem;
    this.animationItemNok.hide();
  }

  completedOk(animationItem: AnimationItem): void {
    this.animationItemOk.stop();
    this.router.navigate(['/menu/my-profile']);
  }

  completedNok(animationItem: AnimationItem): void {
    this.animationItemNok.stop();
    this.animationItemNok.hide();
    this.model.password = '';
  }

  model: any = {};

  constructor( private router: Router,
               private authService: AuthService,
               private alerts: AlertsService) { }

  login() {
    // this.options = {
    //   ...this.options, // In case you have other properties that you want to copy
    //   path: '/assets/animation2.json',
    // };
    this.showLoadingSpinner = true;
    this.authService.login(this.model).subscribe(next => {
      this.showLoadingSpinner = false;
      this.animationItemOk.show();
      this.animationItemNok.hide();
      this.animationItemOk.play();
    }, error => {
      //this.alerts.presentAlert('Attention', 'Wrong password or email', '', 'OK');
      this.showLoadingSpinner = false;
      this.animationItemOk.hide();
      this.animationItemNok.show();
      this.animationItemNok.play();
    });
  }

  ionViewWillEnter() {
    this.model.password = '';
  }

  ngOnInit() {
  }

}
