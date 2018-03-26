import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyOrderListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-order-list',
  templateUrl: 'my-order-list.html',
})
export class MyOrderListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
 
    this.getGoodList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyOrderListPage');
  }
  // 订单item
  orders: Order;
  getGoodList() {
    let orderSumCount = 0;
    let orderSumPrice = 0;

    let orderTmp = [
      new Order(1, '南城天安店', -1, [
        new goods(1, "山药", 1, 15),
        new goods(2, "小米", 1, 15),
        new goods(3, "鸡蛋", 1, 15),
        new goods(4, "啤酒", 1, 15),
        new goods(5, "苹果", 1, 15),
        new goods(6, "煎饼果子", 2, 15)], "order_thumbnail.png"),

      new Order(1, '南城天安店', -1, [
        new goods(1, "山药", 1, 15),
        new goods(2, "小米", 1, 15)], "order_thumbnail.png"),

      new Order(1, '南城天安店', -1, [
        new goods(1, "山药", 1, 15),
        new goods(2, "小米", 1, 15),
        new goods(3, "煎饼果子", 2, 15)], "order_thumbnail.png"),

      new Order(1, '南城天安店', -1, [
        new goods(1, "山药", 1, 15),
        new goods(2, "小米", 1, 15),
        new goods(3, "鸡蛋", 1, 15),
        new goods(4, "啤酒", 1, 15),
        new goods(5, "苹果", 1, 15),
        new goods(6, "煎饼果子", 2, 15)], "order_thumbnail.png"),
    ];


     console.log(orderTmp[3].goodsList.length);
  }
}

// 商品
// id
// name名字
// count数量
// unitPrice单价
export class goods {
  constructor(
    public id: number,
    public name: string,
    public count: number,
    public unitPrice: number
  ) {

  }
}
// 订单
export class Order {
  constructor(
    //订单id
    // 店铺名
    // 货物状态,数值类型,-1,0,1
    // -1   待付款
    // 0    待收货
    // 1    已完成
    // 物品数组, 包括,单价,数量,名称,
    //图片预览地址thumbnail
    public id: number,
    public shopName: string,
    public goodsStatus: number,
    public goodsList: Array<goods>,
    public thumbnail: string
  ) { }
}
