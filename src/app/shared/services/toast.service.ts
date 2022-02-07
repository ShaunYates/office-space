import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toast!: HTMLIonToastElement;

  constructor(private readonly toastController: ToastController) {}

  async showError(message: string) {
    this.toast = await this.toastController.create({
      message: message,
      position: 'bottom',
      color: 'danger',
      duration: 10000,
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel',
        },
      ],
    });
    this.toast.present();
  }

  async showInfo(message: string, color = '') {
    this.toast = await this.toastController.create({
      message: message,
      position: 'bottom',
      color: color,
      duration: 10000,
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel',
        },
      ],
    });
    this.toast.present();
  }

  async hide() {
    if (this.toast) await this.toast.dismiss();
  }
}
