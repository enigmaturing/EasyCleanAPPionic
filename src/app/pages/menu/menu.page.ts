import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Dashboard',
      icon: 'apps-outline',
      url: '/menu/dashboard',
      roles: ['Admin']
    },
    {
      title: 'Sales',
      icon: 'cash-outline',
      url: '/menu/sales',
      roles: ['Admin', 'Employee']
    },
    {
      title: 'Clients',
      icon: 'people-circle-outline',
      url: '/menu/clients',
      roles: ['Admin', 'Employee']
    },
    {
      title: 'Machines',
      icon: 'water-outline',
      url: '/menu/machines',
      roles: ['Admin', 'Employee', 'Client']
    },
    {
      title: 'My profile',
      icon: 'person-circle-outline',
      url: '/menu/my-profile',
      roles: ['Admin', 'Employee', 'Client']
    },
  ];

  constructor(private router: Router,
              private alertsService: AlertsService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  checkRoles(allowedRoles) {
    return (this.authService.roleMatch(allowedRoles));
  }

  logout() {
    localStorage.removeItem('token');
    this.alertsService.presentToast('Successfully logged out');
    this.router.navigate(['/login']);
  }

}
