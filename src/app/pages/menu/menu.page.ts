import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts.service';

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
      url: '/menu/dashboard'
    },
    {
      title: 'Sales',
      icon: 'cash-outline',
      url: '/menu/sales'
    },
    {
      title: 'Clients',
      icon: 'people-circle-outline',
      url: '/menu/clients'
    },
    {
      title: 'Machines',
      icon: 'water-outline',
      url: '/menu/machines'
    },
  ];

  constructor(private router: Router,
              private alertsService: AlertsService) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    this.alertsService.presentToast('Successfully logged out');
    this.router.navigate(['/login']);
  }

}
