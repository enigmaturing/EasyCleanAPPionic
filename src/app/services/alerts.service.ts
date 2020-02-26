import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private alertController: AlertController,
              private toastController: ToastController) { }

  async presentAlert(headerMsg: string, mainMsg: string, subHeaderMsg: string, buttonsMsg: string) {
    const alert = await this.alertController.create({
      header: headerMsg,
      subHeader: subHeaderMsg,
      message: mainMsg,
      buttons: [buttonsMsg]
    });

    await alert.present();
  }

  async presentToast(mainMsg: string) {
    const toast = await this.toastController.create({
      message: mainMsg,
      duration: 2000
    });
    toast.present();
  }

}
