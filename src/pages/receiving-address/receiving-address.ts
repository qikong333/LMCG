import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CreateAddressPage } from '../create-address/create-address';
 

@IonicPage()
@Component({
  selector: 'page-receiving-address',
  templateUrl: 'receiving-address.html',
})
export class ReceivingAddressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.getAddress();
  }
 
  presentAlert() {
    
 
 
    let alert = this.alertCtrl.create({
      title: '删除地址',
      // message:myAlertTemplets
      subTitle: '是否要删除收货地址？删除后无法恢复，如使用需重新增加。',
      cssClass:"receivng-address-alert",
      buttons: [
        {
          text: '删除',
      
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '取消',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ReceivingAddressPage');
  // }


  // 得到后台的地址列表数据

  addresses: Address[] = [];
  // 是否需要新增
  isCreate: boolean = true;
  getAddress() {
    this.addresses = [new Address(0, "小柠檬", 13712345678, "广东省东莞市南城区西平宏伟东二路明致商厦二楼六沐网(如果两行就这样显示...)", true),
    new Address(1, "冰淇淋", 13712345678, "东莞市南城区西平明致商厦六沐网(一行的时候就这样)", false),
    new Address(2, "小猫猫", 13712345678, "广东省东莞市东城区莞龙路下桥路段东城丰田销售部", false),
    new Address(2, "小猫猫", 13712345678, "广东省东莞市东城区莞龙路下桥路段东城丰田销售部", false),
    new Address(2, "小猫猫", 13712345678, "广东省东莞市东城区莞龙路下桥路段东城丰田销售部", false),
    new Address(2, "小猫猫", 13712345678, "广东省东莞市东城区莞龙路下桥路段东城丰田销售部", false),
    new Address(2, "小猫猫", 13712345678, "广东省东莞市东城区莞龙路下桥路段东城丰田销售部", false),
    new Address(2, "小猫猫", 13712345678, "广东省东莞市东城区莞龙路下桥路段东城丰田销售部", false),
    new Address(2, "小猫猫", 13712345678, "广东省东莞市东城区莞龙路下桥路段东城丰田销售部", false),
    new Address(2, "小猫猫", 13712345678, "广东省东莞市东城区莞龙路下桥路段东城丰田销售部", false),
    new Address(2, "小猫猫", 13712345678, "广东省东莞市东城区莞龙路下桥路段东城丰田销售部", false),
    ]


    this.isCreate = this.addresses.length !== 0 ? true : false;
  }








  // 进入新增加页面的逻辑
  pushCreateAddress(){
    this.navCtrl.push(CreateAddressPage);
  }
}


export class Address {
  constructor(
    public aid: number,

    public aName: string,
    public aTel: number,
    public aDesc: string,

    public isdefault: boolean

  ) { }
}
