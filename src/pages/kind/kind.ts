import { PublicServiceProvider } from './../../providers/public-service/public-service';
import { NativeServiceProvider } from './../../providers/native-service/native-service';
import { ApiServiceProvider } from './../../providers/api-service/api-service';
import { Observable } from 'rxjs';
import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

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
  public state: boolean      //状态
  public selectKindText     //类别筛选文字
  public Arr_car = []              //购物车数组        
  public Arr_car_end = []          //购物车数组结果   
  public car_num_sum = 0             //接口购物车总数量
  public car_sprice_sum = 0           //接口购物车总价格
  public local_num_sum = 0            //本地购物车总数量
  public local_sprice_sum = 0         //本地购物车总数量
  public orderby: string = ' '                     //排序
  public orderbyImg = "assets/imgs/orderby.svg"
  public orderbyState: boolean;                 //排序状态
  public itemCode                     //类别代号
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpServiceProvider,
    public api: ApiServiceProvider,
    public native: NativeServiceProvider,
    public publicservice: PublicServiceProvider,
    public loadingCtrl: LoadingController,
  ) {
    let loading = this.loadingCtrl.create({
      content: '正在为您定位，请稍等...'
    });
    loading.present();
    let shopInfo = JSON.parse(localStorage.getItem('shopInfo')) 
  
    setTimeout(() => {
      if (shopInfo.status == 0) {
        this.navCtrl.push('SelectStorePage')
        this.native.showToast('定位失败，' + shopInfo.info)
      } else {
        this.native.showToast('定位成功')
      }
      loading.dismiss();
    }, 3000);


  }

  ionViewDidLoad() {


  }

  ionViewWillEnter() {
    this.reqCoupon();
    this.reqCouponed();
    this.Distribution();
    this.shopInfo();
    setTimeout(() => {
      this.shopcarNum();
    }, 2000);
     
    this.getCommodity(10, 1);

    this.state = false;
    this.selectKindText = '全部'
  }



  // 
  /**
   * @name 首页商品列表
   * @param code 列表代码
   * @param isparent 1：一级菜单；0：二级菜单
   */
  getCommodity(code, isparent) {
    this.orderby = ' '
    this.orderbyImg = "assets/imgs/orderby.svg"
    let params = {
      code: code,
      isparent: isparent
    }
    console.log(params);

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
    this.api.shopcarNum()
      .map(r => r.json())
      .subscribe(r => {
        console.log('购物车数量')
        console.log(r)
        if (r.code == 200) {
          this.car_num_sum = r.data.totalCount;
          this.car_sprice_sum = r.data.totalPrice;
        } else {
          this.native.showToast(r.message);
        }

      })
  }

  clickitem(i, code) {
    console.log(code);
    this.itemCode = code;
    this.selectKindText = '全部'
    this.state = true;
    this.first_clicked = i;
    this.Arr_second_checked = [];
    console.log(this.Arr_second[i]);
    this.Arr_second_checked = this.Arr_second[i]
    console.log(this.Arr_second_checked);
    this.getCommodity(code, 1);

  }

  //点击筛选
  selectKind(e, code) {
    console.log(code);

    this.selectKindText = e;
    this.getCommodity(code, 0);
  }


  onUpdate(data) {
    let a = [] //存放数组
    let num_sum = 0
    let sprice_sum = 0

    this.Arr_car.push(data)

    let arr = this.Arr_car.reduce((map, cur) => {
      map[cur.goods] = cur;
      return map
    }, {})

    for (let key in arr) {
      a.push(arr[key]);
    }

    this.Arr_car_end = a.filter(e => e.number != 0);

    console.log(this.Arr_car_end);

    this.Arr_car_end.forEach(e => {
      num_sum = e.number + num_sum;
      sprice_sum = e.sprice * e.number + sprice_sum;
    })
    this.local_num_sum = num_sum;
    this.local_sprice_sum = sprice_sum;


  }

  // 跳转详情页面
  toItemDetail(data) {
    this.navCtrl.push('ItemDetailPage', { data: data })
  }

  // 点击筛选返回全部
  selectAll() {
    this.selectKindText = "全部";
    this.getCommodity(this.itemCode, 1);
  }


  // 排序
  orderbyFn() {
    this.orderbyState = !this.orderbyState;
    if (this.orderbyState) {
      this.orderby = "up";
      this.orderbyImg = "assets/imgs/orderby_up.svg"
    } else {
      this.orderby = "down"
      this.orderbyImg = "assets/imgs/orderby_down.svg"
    }
  }


  toSearchPage() {
    this.navCtrl.push('SearchPage')
  }



  //下拉加载
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
