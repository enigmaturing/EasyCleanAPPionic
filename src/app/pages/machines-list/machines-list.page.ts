import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
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
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-machines-list',
  templateUrl: './machines-list.page.html',
  styleUrls: ['./machines-list.page.scss'],
})
export class MachinesListPage implements OnInit {

  constructor(private machineService: MachineService,
              private tariffService: TariffService,
              private alertsService: AlertsService,
              private authService: AuthService,
              private router: Router,
              private salesService: SalesService) { }

  machineGroups: Partial<MachineGroup>[] = [{}];
  availableTariffs: Partial<Tariff>[] = [{}];
  selectedMachineGroupId: number;
  selectedTariffId: number;
  isData = false;
  step = 0;
  machineUsage = {} as MachineUsage;
  animationItemOk: AnimationItem;
  animationItemsMachines: AnimationItem[] = [];
  animationItemCounter = 0;
  showLoadingSpinner = false;
  selectedQuantity: number[] = [];

  optionsOk: AnimationOptions = {
    path: '/assets/animation_ok.json',
    autoplay: false,
    loop: false
  };

  optionsMachine: AnimationOptions = {
    path: 'https://assets1.lottiefiles.com/datafiles/DyOxNAIZAX9M2BI/data.json',
    autoplay: false,
    loop: false
  };

  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 5,
    speed: 400,
  };

  @ViewChild('slides', {static: false}) slides: IonSlides;

  selectMachineGroup(selectedGroupId: number) {
    this.tariffService.getTariffsOfMachineGroup(selectedGroupId).subscribe((tariffs: Tariff[]) => {
      this.availableTariffs = tariffs;
      this.selectedMachineGroupId = selectedGroupId;
      this.availableTariffs.forEach(element => {
        this.selectedQuantity.push(1);
      });
      this.step = 1;
    }, error => {
      this.alertsService.presentToast('Error retrieving available traiffs');
    });
  }

  selectMachine(selectedMachineId: number) {
    this.machineUsage.machineId = selectedMachineId;
    this.step = 2;
  }

  selectTariff(tariffId: number, cardNumber: number) {
    this.showLoadingSpinner = true;
    this.selectedTariffId = tariffId;
    this.machineUsage.quantityOfServicesBooked = this.selectedQuantity[cardNumber];
    this.machineUsage.tariffId = this.selectedTariffId;
    this.machineUsage.userId = this.authService.decodedToken.nameid;
    this.salesService.makeMachineUsage(this.machineUsage).subscribe(next => {
      this.showLoadingSpinner = false;
      this.step = 3;
    }, error => {
      this.showLoadingSpinner = false;
      this.alertsService.presentToast('No tienes suficiente crédito');
    });
  }

  onBackClick() {
    this.step--;
  }

  slideChanged(e: any) {
    this.animationItemsMachines.forEach(element => {
      element.stop();
    });
    // get current shown slide and animate only that one
    this.slides.getActiveIndex().then((index: number) => {
      this.animationItemsMachines[index].play();
    });
  }

  animationOkCreated(animationItem: AnimationItem): void {
    this.animationItemOk = animationItem;
    this.animationItemOk.play();
  }

  animationMachineCreated(animationItem: AnimationItem): void {
    this.animationItemsMachines[this.animationItemCounter] = animationItem;
    if (this.animationItemCounter === 0) {
      this.animationItemsMachines[this.animationItemCounter].play();
    }
    this.animationItemCounter++;
  }

  animationMachineCompleted(): void {
    this.animationItemsMachines.forEach(element => {
      element.stop();
    });
  }

  completedOk(animationItem: AnimationItem): void {
    this.animationItemOk.stop();
    this.step = 0;
    this.getMachineGroups();
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

  getMachineGroups() {
    this.machineService.getMachineGroups().subscribe((machineGroups: MachineGroup[]) => {
      this.machineGroups = machineGroups;
      this.isData = true;
    }, error => {
      this.alertsService.presentToast('Error retrieving avilable groups');
    });
  }

  onClickIncreaseQuantity(cardNumber: number){
    if (this.selectedQuantity[cardNumber] < 10) {
      this.selectedQuantity[cardNumber]++;
    }
  }

  onClickDecreaseQuantity(cardNumber: number){
    if (this.selectedQuantity[cardNumber] > 1) {
      this.selectedQuantity[cardNumber]--;
    }
  }

  ngOnInit() {
    this.getMachineGroups();
  }

}
