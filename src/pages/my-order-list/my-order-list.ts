import { Component, ViewChild, ElementRef, Renderer,AfterViewChecked ,AfterViewInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage({
  name:"MyOrderListPage"
})
@Component({
  selector: 'page-my-order-list',
  templateUrl: 'my-order-list.html',
})
export class MyOrderListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private renderer:Renderer) {


  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyOrderListPage');
 
  // 设置已选商品的宽度
  // this.getGoodList();
  }

  ngAfterViewInit(){
    this.getGoodList();
  }

  // 设置已选商品的宽度
 
  @ViewChild("goodsItems")  goodsItems:ElementRef;
  
  selectGoodsWith(){
  // let goodsItems =  this.goodsItems;
  // console.log(goodsItems);
  // 获取每个产品li的宽度
  let goodsLi = this.goodsItems.nativeElement.children[0].offsetWidth+this.goodsItems.nativeElement.children[0].offsetLeft+1;
// console.log(goodsLi+100000000000);
// 设置产品列表的宽度

  let goodsLength = this.goodsItems.nativeElement.children.length;
 
this.renderer.setElementStyle(this.goodsItems.nativeElement,'width',goodsLi*goodsLength+"px");
 
    
  }
  
// tabs页面
clickTab:number = 3;
tabsArr:Array<string> =['待付款','待收货','已完成','全部订单'];
selectTabs(index){
  this.clickTab =index;
}


// 删除




deleteOrder(){
  alert("是否取消");
}











  // 订单item
  orders: any;
  isNoOrder:boolean=true;
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

      new Order(1, '南城天安店', 0, [
        new goods(1, "山药", 1, 15),
        new goods(2, "小米", 1, 15)], "order_thumbnail.png"),

      new Order(1, '南城天安店', -1, [
        new goods(1, "山药", 1, 15),
        new goods(2, "小米", 1, 15),
        new goods(3, "煎饼果子", 2, 15)], "order_thumbnail.png"),

      new Order(1, '南城天安店', 1, [
        new goods(1, "山药", 1, 15),
        new goods(2, "小米", 1, 15),
        new goods(3, "鸡蛋", 1, 15),
        new goods(4, "啤酒", 1, 15),
        new goods(5, "苹果", 1, 15),
        new goods(6, "煎饼果子", 2, 15)], "order_thumbnail.png"),
    ];

    this.isNoOrder= orderTmp.length!==0?false:true;
this.orders =  orderTmp;
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
