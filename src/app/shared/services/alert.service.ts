import { Injectable } from '@angular/core';
import { AlertButton, AlertController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private alert!: HTMLIonAlertElement;

  constructor(private readonly alertController: AlertController) {}

  async showAlert(
    message: string,
    header: string | undefined,
    subHeader: string | undefined,
    buttons: (string | AlertButton)[] | undefined
  ) {
    this.alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons,
    });
    this.alert.present();
  }

  async hide() {
    if (this.alert) await this.alert.dismiss();
  }
}
