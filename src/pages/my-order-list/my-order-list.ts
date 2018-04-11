import { Component, ViewChild, ElementRef, Renderer, AfterViewChecked, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { SwitchView } from '@angular/common/src/directives/ng_switch';
// import { Content } from 'ionic-angular/navigation/nav-interfaces';

@IonicPage({
  name: "MyOrderListPage"
})
@Component({
  selector: 'page-my-order-list',
  templateUrl: 'my-order-list.html',
})
export class MyOrderListPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private renderer: Renderer,
    private apiService: ApiServiceProvider,
 
  ) {

    // 获取全部的订单列表
    // this.getQueryOrders();
      this.selectTabs(this.navParams.get("state"));

  }

  /*************************************订单页面的变量STR*******************************************/

  // tabs页面
  clickTab: number = 3;
  tabsArr: Array<string> = ['待付款', '待收货', '已完成', '全部订单'];

  // 订单item
  orders: any;
  // 订单产品列表
  odProductList: any;
  isOrder: boolean ;
// 查询状态

@ViewChild(Content) content: Content;

 
  /*************************************订单页面的变量END*******************************************/

  /*************************************订单页面的http请求STR*******************************************/
  // 获取全部的订单列表
  /**
    * @name 查询订单列表 使用页面my-order-list
    * @param  eq_orderStatus: number, 全部订单0 待付款1  待收获3   待评价4   已完成5
    * @param  page: number,       //待付款当前页码1 待收货当前页码1 待评价当前页码1 全部订单当前页码1
    * @param  size: number,      //查询出来的数量
    * @param  userAgent: string    设备
    * @param  tokenId: string,    //获取会话密钥
    */

    /**************************函数被封装了, 封装到了 selectTabs函数*****************************************/ 
  // getQueryOrders() {
  //   let eq_orderStatus=0;
  // console.log(  this.navParams.get("state")) ;
  // switch (this.navParams.get("state")){
  //   // 待付款
  //   case 0 :
  //   eq_orderStatus = 1;
  //   break;
  //   // 待收货
  //   case 0 :
  //   eq_orderStatus = 3;
  //   break;
  //   // 已完成
  //   case 0 :
  //   eq_orderStatus = 5;
  //   break;
  //   // 全部订单
  //   case 0 :
  //   eq_orderStatus = 0;
  //   break;
  // }
  //   this.apiService.queryOrders(eq_orderStatus)
  //     .map(e => e.json())
  //     .subscribe(
  //       (item) => {
        
  //         this.orders = item.content;
  //         console.log(this.orders)
  //       },
  //       (err) => { console.error(err) },
  //       () => {
 
  //         console.log("getQueryOrders() is ends")
  //       }
  //     )
  // }
    /**************************函数被封装了, 封装到了 selectTabs函数*****************************************/ 
  /*************************************订单页面的http请求END*******************************************/

  /*************************************数据结构处理STR*******************************************/
 
  

  //   // 处理订单item
  //   structureOrders(orders){
  //     // public id: number,
  //     // public name: string,
  //     // public count: number,
  //     // public unitPrice: number

  //     // 订单数量
  //     let ordersCount;
  //     ordersCount = this.orders.odProductList;
  // console.log(ordersCount);
  //     // 订单总价
  //     //     this.isNoOrder = orderTmp.length !== 0 ? false : true;
  //     // this.orders = orderTmp;
  //     // console.log(orderTmp[3].goodsList.length);



  //   }
  // getGoodList() {
  //   let orderSumCount = 0;
  //   let orderSumPrice = 0;

  //   let orderTmp = [
  //     new Order(1, '南城天安店', -1, [
  //       new goods(1, "山药", 1, 15),
  //       new goods(2, "小米", 1, 15),
  //       new goods(3, "鸡蛋", 1, 15),
  //       new goods(4, "啤酒", 1, 15),
  //       new goods(5, "苹果", 1, 15),
  //       new goods(6, "煎饼果子", 2, 15)], "order_thumbnail.png"),

  //     new Order(1, '南城天安店', 0, [
  //       new goods(1, "山药", 1, 15),
  //       new goods(2, "小米", 1, 15)], "order_thumbnail.png"),

  //     new Order(1, '南城天安店', -1, [
  //       new goods(1, "山药", 1, 15),
  //       new goods(2, "小米", 1, 15),
  //       new goods(3, "煎饼果子", 2, 15)], "order_thumbnail.png"),

  //     new Order(1, '南城天安店', 1, [
  //       new goods(1, "山药", 1, 15),
  //       new goods(2, "小米", 1, 15),
  //       new goods(3, "鸡蛋", 1, 15),
  //       new goods(4, "啤酒", 1, 15),
  //       new goods(5, "苹果", 1, 15),
  //       new goods(6, "煎饼果子", 2, 15)], "order_thumbnail.png"),
  //   ];


  // }

  /*************************************数据结构处理END*******************************************/


  /*************************************订单页面的DOM操作STR*******************************************/
  ngAfterViewInit() {
    // this.getGoodList();
  }

  // 设置已选商品的宽度

  @ViewChild("goodsItems") goodsItems: ElementRef;

  selectGoodsWith() {
    // let goodsItems =  this.goodsItems;
    // console.log(goodsItems);
    // 获取每个产品li的宽度
    let goodsLi = this.goodsItems.nativeElement.children[0].offsetWidth + this.goodsItems.nativeElement.children[0].offsetLeft + 1;
    // console.log(goodsLi+100000000000);
    // 设置产品列表的宽度

    let goodsLength = this.goodsItems.nativeElement.children.length;

    this.renderer.setElementStyle(this.goodsItems.nativeElement, 'width', goodsLi * goodsLength + "px");

  }

  // 删除

  deleteOrder() {
    alert("是否取消");
  }


  // tabs页面

  selectTabs(index) {
    console.log("自己页面http请求"+index);
    
    this.clickTab =index;
    switch (index){
      // 待付款
    case 0 :
    index = 1;
  
    break;
    // 待收货
    case 1 :
    index = 3;
   
    break;
    // 已完成
    case 2 :
    index = 5;
 
    break;
    // 全部订单
    case 3 :
    index = 0;
   
    break;
  }
 
  this.apiService.queryOrders(index)
      .map(e => e.json())
      .subscribe(
        (item) => {
 
    //  console.log("这里是请求的东西"+item)
    //  console.log(item)
          this.orders = item.content;
         
          console.log(item)
          if(item.totalElements==0){
            this.isOrder=true;
          }else{
            this.isOrder=false;
          }

          // 跳转到顶部
          if(this.content.scrollToTop){
            this.content.scrollToTop();
          }
     
        },
        (err) => { console.error(err) },
        () => {
 
          console.log("getQueryOrders() is ends")
        }
      )
  }

// 上拉增加
doInfinite(infiniteScroll) {
  console.log('Begin async operation');
 
}
 
  /*************************************订单页面的DOM操作END*******************************************/

}
/***************************************************订单页面的类型约束STR*********************************************************/

// 商品
// id
// name名字
// count数量
// unitPrice单价
export class Goods {
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
    public goodsList: Array<Goods>,
    public thumbnail: string
  ) { }
}

/***************************************************订单页面的类型约束END*********************************************************/
