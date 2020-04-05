import { Component, OnInit } from '@angular/core';
import { MachineService } from 'src/app/services/machine.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlertsService } from 'src/app/services/alerts.service';
import { MachineGroup } from '../../models/machine-group';
import { Tariff } from '../../models/tariff';
import { TariffService } from 'src/app/services/tariff.service';

@Component({
  selector: 'app-machines-list',
  templateUrl: './machines-list.page.html',
  styleUrls: ['./machines-list.page.scss'],
})
export class MachinesListPage implements OnInit {

  machineGroups: Partial<MachineGroup>[] = [{}];
  availableTariffs: Partial<Tariff>[] = [{}];
  selectedMachineGroupId;
  isData = false;
  step = 0;

  constructor(private machineService: MachineService,
              private tariffService: TariffService,
              private alertsService: AlertsService) { }

  selectMachineGroup(selectedGroupId: number) {
    this.tariffService.getTariffsOfMachineGroup(selectedGroupId).subscribe((tariffs: Tariff[]) => {
      this.availableTariffs = tariffs;
      this.selectedMachineGroupId = selectedGroupId;
      this.step = 1;
    }, error => {
      this.alertsService.presentToast('Error retrieving available traiffs');
    });
  }

  selectMachine(selectedGroupId: number) {
    this.tariffService.getTariffsOfMachineGroup(selectedGroupId).subscribe((tariffs: Tariff[]) => {
      this.availableTariffs = tariffs;
      this.step = 1;
    }, error => {
      this.alertsService.presentToast('Error retrieving available traiffs');
    });
  }

  selectTariff(tariffName: string) {
    this.step = 2;
  }

  onBackClick() {
    this.step--;
  }

  ngOnInit() {
    this.machineService.getMachineGroups().subscribe((machineGroups: MachineGroup[]) => {
      this.machineGroups = machineGroups;
      this.isData = true;
    }, error => {
      this.alertsService.presentToast('Error retrieving avilable groups');
    });
  }

}
