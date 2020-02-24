import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
