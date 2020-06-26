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
    path: '/assets/animation_ok.json',
    autoplay: false,
    loop: false
  };

  optionsNok: AnimationOptions = {
    path: '/assets/animation_nok.json',
    autoplay: false,
    loop: false
  };

  optionsLoading: AnimationOptions = {
    path: '/assets/animation_loading.json',
    autoplay: false,
    loop: true
  };

  animationItemOk: AnimationItem;
  animationItemNok: AnimationItem;
  animationItemLoading: AnimationItem;


  animationOkCreated(animationItem: AnimationItem): void {
    this.animationItemOk = animationItem;
    this.animationItemOk.hide();
  }

  animationNokCreated(animationItem: AnimationItem): void {
    this.animationItemNok = animationItem;
    this.animationItemNok.hide();
  }

  animationLoadingCreated(animationItem: AnimationItem): void {
    this.animationItemLoading = animationItem;
    this.animationItemLoading.hide();
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
    this.animationItemLoading.play();
    this.animationItemLoading.show();
    this.authService.login(this.model).subscribe(next => {
      this.animationItemLoading.hide();
      this.animationItemOk.show();
      this.animationItemNok.hide();
      this.animationItemOk.play();
    }, error => {
      //this.alerts.presentAlert('Attention', 'Wrong password or email', '', 'OK');
      this.animationItemLoading.hide();
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
