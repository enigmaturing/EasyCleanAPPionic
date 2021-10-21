import { Component, OnInit } from '@angular/core';
import { UserDetailed } from 'src/app/models/user-detailed';
import { UserService } from '../../services/user.service';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.page.html',
  styleUrls: ['./clients-list.page.scss'],
})
export class ClientsListPage implements OnInit {

  clients: Partial<UserDetailed>[] = [{}];

  constructor(private usersService: UserService,
              private alertsService: AlertsService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.usersService.getClients().subscribe((clients: UserDetailed[]) => {
      this.clients = clients;  
    }, error => {
      this.alertsService.presentToast('Error retrieving clients');
    });
  }

}
