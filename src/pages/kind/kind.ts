import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kind',
  templateUrl: 'kind.html',
})
export class KindPage {

  public Arr_first = []     //一级菜单
  public Arr_second = []    //二级菜单
  public Arr_second_checked = []    //二级菜单
  public product = [];      //产品列表
  public first_clicked      //点击事件颜色对比
  public state:boolean      //状态
  public selectKindText     //类别筛选文字
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpServiceProvider) {


    this.reqCoupon();
    this.reqCouponed();
    this.Distribution();
    this.shopInfo();
    this.shopcarNum();
    this.getCommodity(10,1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KindPage');
    
  }

  ionViewWillEnter() {
    this.state = false;
    this.selectKindText = '全部'
  }



  //首页商品列表
  getCommodity(code, isparent) {
    let params = {
      code: code,
      isparent: isparent
    }
    this.http.get('/api/shop/home/list/' + localStorage.getItem('shopId'), params)
      .map(r => r.json())
      .subscribe(r => {
        console.log('首页商品列表');
        console.log(r);
        this.product = r.data.content

      })
  }


  // 自动获取优惠券ID 
  reqCoupon() {
    let params = {
      tokenId: localStorage.getItem('tokenId'),
      page: 1,
      size: 10,
      userAgent: localStorage.getItem("userAgent")
    }
    this.http.get('/api/shop/couponActivity/couponActivityListByPassId', params)
      .map(r => r.json())
      .subscribe(r => {
        console.log('自动获取优惠券ID')
        console.log(r)
      })
  }

  // 会员领取过的ID
  reqCouponed() {
    let params = {
      page: 1,
      size: 10,
    }
    this.http.get('/api/shop/couponActivity/couponActivityList', params)
      .map(r => r.json())
      .subscribe(r => {
        console.log('会员领取过的ID')
        console.log(r)
      })
  }

  // 配送条件
  Distribution() {
    this.http.get('/api/shop/info/contContent/distribute-condition', { shopId: localStorage.getItem('shopId') })
      .map(r => r.json())
      .subscribe(r => {
        console.log("配送条件")
        console.log(r)
      })
  }

  // 首页商家信息
  shopInfo() {
    let params = {
      tokenid: localStorage.getItem('tokenId'),
      userAgent: localStorage.getItem('userAgent'),
    }
    this.http.get('/api/shop/home/product/' + localStorage.getItem('shopId'), params)
      .map(r => r.json())
      .subscribe(r => {
        console.log('首页商家信息')
        console.log(r)
        // for (let i = 0; i <  r["categoryItem"].length; i++) {
        //   this.Arr_first.push(r["categoryItem"][i]) 
          
        // }
        this.Arr_first = r.categoryItem;
        r["categoryItem"].forEach(e => {
          
          this.Arr_second.push(e.items)
        });

        console.log("一级菜单");
        console.log(this.Arr_first);
        console.log("二级菜单");
        console.log(this.Arr_second);

      })
  }

  // 购物车数量
  shopcarNum() {
    let params = {
      tokenid: localStorage.getItem('tokenId'),
      userAgent: localStorage.getItem('userAgent'),
    }
    this.http.get('/api/shop/shopcar/odShopcarDetail/shpocarinfo/' + localStorage.getItem('shopId'), params)
      .map(r => r.json())
      .subscribe(r => {
        console.log('购物车数量')
        console.log(r)
      })
  }

  clickitem(i,code) {
    console.log(code);
    this.selectKindText = '全部'
    this.state = true;
    this.first_clicked = i;
    this.Arr_second_checked = [];
    console.log(this.Arr_second[i]);
    this.Arr_second_checked = this.Arr_second[i]
    console.log(this.Arr_second_checked);
    this.getCommodity(code,1);
    
  }

  //点击筛选
  selectKind(e,code){
    console.log(code);
    
    this.selectKindText = e;
    this.getCommodity(code,0);
  }
}
