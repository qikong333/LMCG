import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PayPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'PayPasswordPage'
})
@Component({
  selector: 'page-pay-password',
  templateUrl: 'pay-password.html',
})
export class PayPasswordPage {
  userCode: any; //用户ID
  token: any;    //用户密钥
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPasswordPage');
  }

}
