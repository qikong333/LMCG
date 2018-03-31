import { NavController } from 'ionic-angular';
import { Component, Output, Input } from '@angular/core';

/**
 * Generated class for the ShopCarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'shop-car',
  templateUrl: 'shop-car.html'
})
export class ShopCarComponent {

  @Input("buyNumber")
  buyNumber: any = 0;//购买数

  @Input("sprice")
  sprice: any = 0;//购买数

  @Input("datas")
  datas: any = 0;//购买数


  constructor(
    public navCtrl:NavController,
  ) {
    console.log('Hello ShopCarComponent Component');
     
  }

  toCarList() {

    this.navCtrl.push('CarListPage', {datas:this.datas})
  }

}
