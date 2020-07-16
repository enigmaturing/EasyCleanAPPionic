import { Component, OnInit } from '@angular/core';
import { MachineService } from 'src/app/services/machine.service';
import { AlertsService } from 'src/app/services/alerts.service';
import { MachineGroup } from '../../models/machine-group';
import { Tariff } from '../../models/tariff';
import { TariffService } from 'src/app/services/tariff.service';
import { MachineUsage } from '../../models/machine-usage';
import { AuthService } from 'src/app/services/auth.service';
import { SalesService } from 'src/app/services/sales.service';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { Router } from '@angular/router';
import { Machine } from '../../models/machine';

@Component({
  selector: 'app-machines-list',
  templateUrl: './machines-list.page.html',
  styleUrls: ['./machines-list.page.scss'],
})
export class MachinesListPage implements OnInit {

  machineGroups: Partial<MachineGroup>[] = [{}];
  availableTariffs: Partial<Tariff>[] = [{}];
  selectedMachineGroupId: number;
  selectedTariffId: number;
  isData = false;
  step = 0;
  machineUsage = {} as MachineUsage;
  animationItemOk: AnimationItem;
  showLoadingSpinner = false;

  optionsOk: AnimationOptions = {
    path: '/assets/animation_ok.json',
    autoplay: false,
    loop: false
  };

  constructor(private machineService: MachineService,
              private tariffService: TariffService,
              private alertsService: AlertsService,
              private authService: AuthService,
              private router: Router,
              private salesService: SalesService) { }

  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 5,
    speed: 400
  };

  selectMachineGroup(selectedGroupId: number) {
    this.tariffService.getTariffsOfMachineGroup(selectedGroupId).subscribe((tariffs: Tariff[]) => {
      this.availableTariffs = tariffs;
      this.selectedMachineGroupId = selectedGroupId;
      this.step = 1;
    }, error => {
      this.alertsService.presentToast('Error retrieving available traiffs');
    });
  }

  selectMachine(selectedMachineId: number) {
    this.machineUsage.machineId = selectedMachineId;
    this.step = 2;
  }

  selectTariff(tariffId: number) {
    this.showLoadingSpinner = true;
    this.selectedTariffId = tariffId;
    this.machineUsage.quantityOfServicesBooked = 1; // ToDo: Select desired number of services booked
    this.machineUsage.tariffId = this.selectedTariffId;
    this.machineUsage.userId = this.authService.decodedToken.nameid;
    this.salesService.makeMachineUsage(this.machineUsage).subscribe(next => {
      this.showLoadingSpinner = false;
      this.step = 3;
      this.animationItemOk.show();
    }, error => {
      this.alertsService.presentToast('No tienes suficiente crédito');
    });
  }

  onBackClick() {
    this.step--;
  }

  animationOkCreated(animationItem: AnimationItem): void {
    this.animationItemOk = animationItem;
    this.animationItemOk.play();
  }

  completedOk(animationItem: AnimationItem): void {
    this.animationItemOk.stop();
    this.router.navigate(['/menu/my-profile']);
  }

  isAvailable(machine: Machine) {
    return new Date(machine.dateBusyUntil).valueOf() < new Date().valueOf();
  }

  secondsUntillMachineIsAvailable(machine: Machine) {
    let now, busyUntil;
    now = new Date();
    busyUntil = new Date(machine.dateBusyUntil);
    const secondsWithDecimals = Math.abs(busyUntil - now) / 1000;
    const seconds = Math.ceil(secondsWithDecimals);
    return seconds;
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
