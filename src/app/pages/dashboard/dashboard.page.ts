import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales.service';
import { MachineUsage } from '../../models/machine-usage';
import { DateModel } from '../../models/date-model';
import { AlertsService } from '../../services/alerts.service';
import { MachineUsageDetailed } from '../../models/machine-usage-detailed';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  
  constructor(private salesService: SalesService,
              private alertsService: AlertsService) { }
  
  showListSalesToday = false;
  machineUsagesToday: Partial<MachineUsageDetailed>[] = [{}];
  date = {} as DateModel;
  totalSalesToday = 0;

  ngOnInit() {
    this.date.date = new Date();
    this.getMachineUsagesToday();
  }

  toggleDetailSalesToday() {
    this.showListSalesToday = !this.showListSalesToday;
  }

  getMachineUsagesToday() {
    this.salesService.getMachineUsagesOnDay(this.date).subscribe((machineUsages: MachineUsageDetailed[]) => {
      this.machineUsagesToday = machineUsages;  
      this.getTotalSalesToday();
    }, error => {
      this.alertsService.presentToast('Error retrieving machine usages of today');
    });
  }

  getTotalSalesToday() {
    this.machineUsagesToday.forEach(usage => {
      this.totalSalesToday += usage.totalAmountPaid;
    });
  }

}
