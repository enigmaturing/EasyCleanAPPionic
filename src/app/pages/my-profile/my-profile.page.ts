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

  constructor(private userService: UserService,
              private authService: AuthService,
              private alertsService: AlertsService) { }

  ngOnInit() {
    this.userService.getUser(this.authService.decodedToken.nameid).subscribe((user: UserDetailed) => {
      this.user = user;
    }, error => {
      this.alertsService.presentToast('Error retrieving the user profile');
    });
  }

}
