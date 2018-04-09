import { NativeServiceProvider } from './../../providers/native-service/native-service';
import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { ApiServiceProvider } from './../../providers/api-service/api-service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscriber } from 'rxjs';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'ItemDetailPage'
})
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  getdatas: any    //接受的参数
  datas: any    //查询的参数
  localNum = 1 //购物车数量
  localID      //商品id
  cloudNum = 0    //服务器购物车数量
  isCollection //收藏状态
  itemName: string      //商品名称
  localshop: any        //本地店铺信息
  shopInfo = {
    shopName: '', //店铺名称
    shopDistance: 0,//离店铺的距离
    shopTel: '',//电话
    shopAdd: '',//地址

  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiServiceProvider,
    public http: HttpServiceProvider,
    public native: NativeServiceProvider,

  ) {
    this.localshop = JSON.parse(localStorage.getItem('localshop'))
    console.log(this.localshop);
    this.shopInfo.shopName = this.localshop._name;
    this.shopInfo.shopDistance = this.localshop._distance;
    this.shopInfo.shopTel = this.localshop.telephone;
    this.shopInfo.shopAdd = this.localshop._address;

 
  }

  ionViewCanEnter(){
   
    let getdatas = this.navParams.get('data')
    this.getdatas = getdatas;
    this.itemName = getdatas.name;
    console.log(getdatas);
    console.log(this.getdatas);

    this.selectShopCar();

    // 商品信息
    this.api.itemInfo(getdatas.itemid)
      .map(r => r.json())
      .subscribe(r => {
        console.log(r);
        this.datas = r;
        this.isCollection = r.isCollection;
        this.localID = r.itemId
        this.datas.selectNum = 1;
      })

 

    console.log(this.localNum);

  }

  selectShopCar() {
    // 购物车数量
    this.api.shopcarNum()
      .map(r => r.json())
      .subscribe(r => {
        console.log('购物车数量');
        console.log(r);
        this.cloudNum = r.data.totalCount;
        console.log(this.cloudNum);
      })
  }


  onUpdate(data) {
    console.log(data);
    this.localNum = data.number;
    // this.localID = data.goods;
  }

  //  加入购物车
  add(id) {
    console.log(id);
    console.log(this.localNum);

    this.api.add(id, this.localNum)
      .map(r => r.json())
      .subscribe(r => {
        console.log(r);
        // this.native.showBlock('加入购物车成功')
        if (r.code == 200) {
          this.native.showBlock(r.message)
          this.selectShopCar();
        }
      })
  }

  // 收藏
  Collection() {
    this.isCollection = !this.isCollection
    if (this.isCollection) {
      this.api.favorite(this.getdatas.itemid, 'prod')
        .map(r => r.json())
        .subscribe(r => {
          console.log(r);
          if (r.code == 200) {
            this.native.showBlock(r.message )
          } else{
            this.native.showBlock(r.message)
          }
        })
    
     

    } else {

      this.api.cancelcollect(this.getdatas.itemid, 'prod')
        .map(r => r.json())
        .subscribe(r => {
          console.log(r);
          if (r.code == 200) {
            this.native.showBlock(r.message)
          }else{
            this.native.showBlock(r.message)
          }
        })
     
    }
  }

  // 立即购买
  toOrderSubmission() {
    console.log(this.localNum);
    console.log(this.datas.selectNum);
    
    this.datas.selectNum = this.localNum;                      //商品数量
    this.datas.Totleprice = this.localNum * this.datas.sprice; //商品总价
    this.datas.shopid = localStorage.getItem('shopId');
    this.datas.isUseActivity = 0              // 是否是活动价(0: 否, 1: 是)

    console.log(this.datas);

    let params = {
      shopid: localStorage.getItem('shopId'),//商店ID
      itemid: this.datas.itemId,//ID
      pid: this.datas.pid,//商品ID
      productName: this.datas.name,//商品名称
      productTitle: this.datas.ctitle,//商品标题
      productQty: this.datas.selectNum,//商品数量
      salePrice: this.datas.sprice,//商品单价
      productTotleprice: this.datas.Totleprice, //商品总价
      mainpic: this.datas.mainpic,  //图片url
      isUseActivity: 0//是否是活动价(0:否,1:是)
    }
    console.log(params);
    let arr = []
    arr.push(params)

    this.navCtrl.push('OrderSubmissionPage', { datas: arr })
  }







}
