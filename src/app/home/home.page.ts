import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  async ngOnInit() {
    this.presentToast();
    this.presentAlert();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
