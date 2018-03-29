import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CouponPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"CouponPage"
})
@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon.html',
})
export class CouponPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ) {

    this.clickTab=0;  
    this.couponList= 0;
    this.getCouponList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CouponPage');
  }


  // 选择tabs页面
  clickTab: number;
  couponList: number;
  tabsArr = [`未使用(3)`, `已使用(2)`, `已过期(1)`];
  selectTabs(item, index) {
    console.log(item, index);
    this.clickTab = index;
    this.couponList = index;
    console.log(this.couponList);
    // this.getCouponList();

  }
  // 优惠券
  coupons:Counpon[];
  getCouponList() {
    this.coupons = [
      new Counpon(1, 10, "饮品折扣券", "满100可使用", "2018.02.28-2018.04.28", 0),
      new Counpon(2, 15, "零食折扣券", "满100可使用", "2018.02.28-2018.04.28", 0),
      new Counpon(3, 20, "熟食折扣券", "满100可使用", "2018.02.28-2018.04.28", 0),
      new Counpon(4, 10, "饮品折扣券", "满100可使用", "2018.02.28-2018.04.28", 1),
      new Counpon(5, 15, "零食折扣券", "满100可使用", "2018.02.28-2018.04.28", 1),
      new Counpon(6, 20, "熟食折扣券", "满100可使用", "2018.02.28-2018.04.28", 1),
      new Counpon(7, 10, "饮品折扣券", "满100可使用", "2018.02.28-2018.04.28", 2),
    ]
  }

}

// 优惠券
// cStatus取三个值
// 0 未使用
// 1 已使用
// 2 已过期
export class Counpon {
  constructor(
    private cId: number,
    private cPrice: number,
    private cTitle: string,
    private cDetail: string,
    private cTime: string,
    private cStatus: number
  ) { }
}