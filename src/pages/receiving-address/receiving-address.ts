import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CreateAddressPage } from '../create-address/create-address';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { NativeServiceProvider } from '../../providers/native-service/native-service';


@IonicPage({
  name: "ReceivingAddressPage"
})
@Component({
  selector: 'page-receiving-address',
  templateUrl: 'receiving-address.html',
})
export class ReceivingAddressPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private apiService: ApiServiceProvider,
    private nativeService: NativeServiceProvider 
  ) {

    this.getMsAddress();
    // this.getAddress();
  }



  // 得到后台的地址列表数据
  addresses: Address[] = [];
  // 是否有地址,如果没有地址那么显示无地址的背景图片,否则不显示
  isCreate: boolean = true;




  // 接受参数用户ID
  userId: number = parseInt(localStorage.getItem("userId"));

  // 接受参数用户ID
  ngOnInit() {
    this.userId = this.navParams.get('uId') ? this.navParams.get('uId') : parseInt(localStorage.getItem("userId"));
    // console.log(this.userId);
    this.getMsAddress();
  }
  // 得到用户收货全部地址
  getMsAddress() {
    let that = this;
    this.apiService.msAddress(that.userId)
      .map(e => e.json())
      .subscribe(
        (item) => {

          this.addresses = item;

          this.isCreate = this.addresses.length !== 0 ? true : false;
          console.log(this.addresses)
        },
        (err) => { console.log("获取地址失败") }
      )
  }

  // 删除某一个地址
  deleteAddress(addressId) {
    this.apiService.msAddressDelete(addressId, this.userId)
      .subscribe(
        (item) => {
          if (item.status==200) { 
            
            // 显示删除成功的提示
            this.nativeService.showBlock("地址删除成功",1000);
            this.getMsAddress();
            
          }
          
        }
      )
  }

  // 弹出删除对话框
  deletePresentAlert(addressId) {
    let alert = this.alertCtrl.create({
      title: '删除地址',
      // message:myAlertTemplets
      subTitle: '是否要删除收货地址？删除后无法恢复，如使用需重新增加。',
      // cssClass: "receivng-address-alert",
      buttons: [
        {
          text: '删除',

          handler: () => {
            // 删除函数
            this.deleteAddress(addressId);
           
          }
        },
        {
          text: '取消',
          handler: () => {

          }
        }
      ]
    });
    alert.present();
  }
 
  // 进入编辑页面的逻辑
  /**
   * 
   * @param addressId 地址的全部对象传递过去,可以减少一个http请求
   */
  pushEditeAddress(address) {
  
    this.navCtrl.push("EditeAddressPage", {
      uId: this.userId,
      address,
    });
  }
 
  // 进入增加页面的逻辑
  pushCreateAddress() {
    let that = this;
    this.navCtrl.push("CreateAddressPage", {
      uId: that.userId
    });
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
