import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelectStorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"SelectStorePage"
})
@Component({
  selector: 'page-select-store',
  templateUrl: 'select-store.html',
})
export class SelectStorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.randomShow();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectStorePage');
  }
  // 是否显示的定位成功和失败的图标和定位地址
  selectCondition: boolean = true;
  randomShow() {
    let s = Math.random() * 10;
    this.selectCondition = s > 5 ? true : false;
  }

}
