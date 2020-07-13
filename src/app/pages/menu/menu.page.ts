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
      title: 'Panel',
      icon: 'apps-outline',
      url: '/menu/dashboard',
      roles: ['Admin']
    },
    {
      title: 'Ventas',
      icon: 'cash-outline',
      url: '/menu/sales',
      roles: ['Admin', 'Employee']
    },
    {
      title: 'Clientes',
      icon: 'people-circle-outline',
      url: '/menu/clients',
      roles: ['Admin', 'Employee']
    },
    {
      title: 'Máquinas',
      icon: 'water-outline',
      url: '/menu/machines',
      roles: ['Admin', 'Employee', 'Client']
    },
    {
      title: 'Mi perfil',
      icon: 'person-circle-outline',
      url: '/menu/my-profile',
      roles: ['Admin', 'Employee', 'Client']
    },
    {
      title: 'Mi actividad',
      icon: 'timer-outline',
      url: '/menu/my-usages',
      roles: ['Client']
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
