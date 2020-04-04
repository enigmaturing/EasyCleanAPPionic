import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlertsService } from 'src/app/services/alerts.service';
import { UserDetailed } from 'src/app/models/user-detailed';

@Component({
  selector: 'app-my-usages',
  templateUrl: './my-usages.page.html',
  styleUrls: ['./my-usages.page.scss'],
})
export class MyUsagesPage implements OnInit {

  user: Partial<UserDetailed> = {};
  isData = false;

  constructor(private userService: UserService,
              private authService: AuthService,
              private alertsService: AlertsService) { }

  ngOnInit() {
    this.userService.getUser(this.authService.decodedToken.nameid).subscribe((user: UserDetailed) => {
      this.user = user;
      this.isData = true;
    }, error => {
      this.alertsService.presentToast('Error retrieving the user profile');
    });
  }

}
