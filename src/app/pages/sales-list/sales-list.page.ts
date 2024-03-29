import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales.service';
import { AlertsService } from 'src/app/services/alerts.service';
import { MachineUsageDetailed } from '../../models/machine-usage-detailed';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.page.html',
  styleUrls: ['./sales-list.page.scss'],
})
export class SalesListPage implements OnInit {

  machineUsages: MachineUsageDetailed[];
  isData = false;

  constructor(private salesService: SalesService,
              private alertsService: AlertsService) { }

  loadMachineUsages() {
    this.isData = false;
    this.salesService.getMachineUsages().subscribe((machineUsages: MachineUsageDetailed[]) => {
      this.machineUsages = machineUsages;
      this.isData = true;
    }, error => {
      this.alertsService.presentToast(error);
    });
  }

  ngOnInit() {
    this.loadMachineUsages();
  }

}
