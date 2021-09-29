import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserDetailed } from 'src/app/models/user-detailed';
import { AuthService } from 'src/app/services/auth.service';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  user: Partial<UserDetailed> = {};
  remainingCreditRounded: number;
  isData = false;
  isEditData = false;

  constructor(private userService: UserService,
              private authService: AuthService,
              private alertsService: AlertsService) { }

  ngOnInit() {
    this.userService.getUser(this.authService.decodedToken.nameid).subscribe((user: UserDetailed) => {
      this.remainingCreditRounded = Math.round((user.remainingCredit + 0.00001) * 100) / 100;
      this.user = user;
      this.isData = true;
    }, error => {
      this.alertsService.presentToast('Error retrieving the user profile');
    });
  }

  onClickPayment() {
    this.alertsService.presentToast('Actualmente sólo está habilitado el pago en mostrador');
  }

  editData() {
    this.isEditData = true;
  }

  updateProfileData() {
    this.isEditData = false;
  }

  cancelProfileDataEdition() {
    this.isEditData = false;
  }

}
