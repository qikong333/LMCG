import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PaySelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pay-select',
  templateUrl: 'pay-select.html',
})
export class PaySelectPage {
  public payMoney //支付金额
  public payf1    //消费M卡
  public payf2    //消费积分
  public payf3    //投资M卡
  public payf4    //投资积分
  public     //账户余额
  public payye1 = 0   //消费M卡余额
  public payye2 = 0    //消费积分余额
  public payye3 = 0    //投资M卡余额
  public payye4 = 0    //投资积分余额
  public payye5 = 0    //账户余额余额
  public payName  //支付方式
  public checkedID;
  public coupText;//优惠文字
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaySelectPage');
  }

}
