import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController , private alertCtrl:AlertController) {
    this.showAlert();

  }
  showAlert()
  {
    let alert = this.alertCtrl.create({
      title: 'Hey yash',
      subTitle: 'This is really amazzzing',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
