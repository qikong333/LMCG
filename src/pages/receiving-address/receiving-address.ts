import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReceivingAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receiving-address',
  templateUrl: 'receiving-address.html',
})
export class ReceivingAddressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getAddress();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceivingAddressPage');
  }


  // 得到后台的地址列表数据

  addresses:Address[] = [];
  // 是否需要新增
  isCreate:boolean = true;
  getAddress(){
    this.addresses = [new Address(0, "小柠檬",  13712345678,   "广东省东莞市南城区西平宏伟东二路明致商厦二楼六沐网(如果两行就这样显示...)",true),
    new Address(1, "冰淇淋",  13712345678,   "东莞市南城区西平明致商厦六沐网(一行的时候就这样)",false),
    new Address(2, "小猫猫",  13712345678,   "广东省东莞市东城区莞龙路下桥路段东城丰田销售部",false),
    new Address(2, "小猫猫",  13712345678,   "广东省东莞市东城区莞龙路下桥路段东城丰田销售部",false),
    new Address(2, "小猫猫",  13712345678,   "广东省东莞市东城区莞龙路下桥路段东城丰田销售部",false),
    new Address(2, "小猫猫",  13712345678,   "广东省东莞市东城区莞龙路下桥路段东城丰田销售部",false),
    new Address(2, "小猫猫",  13712345678,   "广东省东莞市东城区莞龙路下桥路段东城丰田销售部",false),
    new Address(2, "小猫猫",  13712345678,   "广东省东莞市东城区莞龙路下桥路段东城丰田销售部",false),
    new Address(2, "小猫猫",  13712345678,   "广东省东莞市东城区莞龙路下桥路段东城丰田销售部",false),
    new Address(2, "小猫猫",  13712345678,   "广东省东莞市东城区莞龙路下桥路段东城丰田销售部",false),
    new Address(2, "小猫猫",  13712345678,   "广东省东莞市东城区莞龙路下桥路段东城丰田销售部",false),
   ]


   this.isCreate= this.addresses.length !== 0?true:false;
  }
}


export class Address{
  constructor(
    private aid:number,

    private aName:string,
    private aTel:number,
    private aDesc:string,
 
    private isdefault:boolean

  ){}
}
