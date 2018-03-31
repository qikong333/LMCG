import { ApiServiceProvider } from './../../providers/api-service/api-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the OrderOkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'OrderOkPage'
})
@Component({
  selector: 'page-order-ok',
  templateUrl: 'order-ok.html',
})
export class OrderOkPage {
 getdatas  //获取的参数
  coupText
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ViewCtrl:ViewController,
    public api:ApiServiceProvider,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderOkPage');
    console.log(this.navParams.get('OrderOkParam'));
    console.log(this.navParams.get('discountParams'));

    this.getdatas = this.navParams.get('OrderOkParam')
    if (!this.getdatas.isDiscounts ) {
      this.coupText = this.navParams.get('discountParams')
     }else{
      this.coupText = 'M卡支付享受' + this.navParams.get('discountParams') * 100 + '折'
     }


  }

  // ionViewCanEnter(){
  //   this.getdatas = this.navParams.get('OrderOkParam')
  //   let OrderOkParam = this.navParams.get('OrderOkParam')
  //   let discountParams = this.navParams.get('discountParams')


  //   this.api.isDiscounts(this.navParams.get('discountParams'))
  //     .map(r => r.json())
  //     .subscribe(r => {
  //       console.log(r);
  //       if (r.code == 200) {
  //         //查当前折扣
  //         this.api.getDiscountRatio()
  //           .map(d => d.json())
  //           .subscribe(d => {
  //             console.log(d);
  //             this.coupText = 'M卡支付享受' + d.data * 100 + '折'
  //           })

  //       } else {

  //         this.coupText = r.message;
  //       }

  //     })

  // }

ok(){
  this.ViewCtrl.dismiss({ OrderOkParam:true});
}

close(){
  this.ViewCtrl.dismiss({ OrderOkParam: false });
}

}
