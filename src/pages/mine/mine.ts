import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// 服务提供器
import { ApiServiceProvider } from '../../providers/api-service/api-service';

/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "MinePage"
})
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    public apiService: ApiServiceProvider
  ) {

    this.getMsMember();

  }  // DOM页面跳转函数



  // 跳转到订单页面全部订单
  pushMyOrderList() {
    this.navCtrl.push("MyOrderListPage", {
      // uId: this.mineInfo.uId
    });
  }







  // 跳转到优惠券页面
  pushCouponPage() {
    this.navCtrl.push("CouponPage", {
      uId: this.mineInfo.uId
    });
  }
  // 跳转到我的收藏页面
  // pushMyFavoritePage(){
  //   this.navCtrl.push("CouponPage",{
  //      uId: this.mineInfo.uId
  //   });
  // }

  // 跳转到收货地址页面
  pushReceivingAddressPage() {
    this.navCtrl.push("ReceivingAddressPage", {
      uId: this.mineInfo.uId
    });
  }
  // 跳转到投诉建议页面
  // pushMyFavoritePage(){
  //   this.navCtrl.push("CouponPage",{
  //      uId: this.mineInfo.uId
  //   });
  // }
  // 跳转到关于我们页面




  /****
   * 
   * @returns [全部变量]
   * 
   * 
   * 
   * **********/
  // 用户基本信息
  mineInfo: MineInfo;



  onLogin: boolean;//手机登录判断
  // isLogin: boolean;//未登录
  userName: any; //用户名为手机号
  // tokenId: any;//会话密钥
  // userId: any;//消息页面进入判断

  // DaiFuKuanTotal: any;//查询待付款总数
  // DaiShouKuanTotal: any;//查询待收货总数
  // DaiPenJaiTotal: any;//查询待评价总数
  // ShouHouTotal: any;//查询退款或售后总数

  userAgent: string;



  /**
   * @author 七月
   * @reslove API
   * @return 会员信息
   *  
   */
  getMsMember() {
    let that = this;
    if (localStorage.getItem('headimgurl')) {
      this.mineInfo.uheaderImg = localStorage.getItem('headimgurl');

      return;
    }
    this.apiService.msMember()

      .map(e => e.json())

      .subscribe(
        (item) => {
          if (item.code == 200) {
            console.log(item);
            this.mineInfo = new MineInfo(item.nickname, item.memberId, item.avatarpath, that.randomSignature());

          } else {
            this.mineInfo = new MineInfo("六沐便利店", 1, item.avatarpath, that.randomSignature());
          }

        },
        (err) => { console.error("无法得到用户信息") },
        () => { console.log("getMsMember() is ends") })


  }
  /***********辅助性函数*********/
  randomSignature() {
    let j = Math.round(Math.random() * 10);
    if (j >= 10) {
      j = 9;
    }
    console.log(j);
    let signature = [
      '年轻不是我颓废的理由，却能成为我们奋斗的资本!',
      '人生在世，应该这样，在芬芳别人的同时美丽自己。',
      '安慰别人的话，终究安慰不了自己。',
      '安慰别人的话，终究安慰不了自己。',
      '只要你开心、快乐，一切都好。',
      '快乐要懂得分享，才能加倍的快乐。',
      '失因为贪说真的，老实人很少上当。',
      '每天告诉自己一次：我真的很不错。',
      '你的爱曾是那么熟悉，刻骨又铭心',
      '我想留长发，不再爱人渣，',
    ];


    return signature[j];
  }
  /***********辅助性函数END*********/


}

// 类型约束
/**
 * @author 七月
 * @returns [name,id,headerImg,signature]
*/
export class MineInfo {
  constructor(
    public uNickName: string = "便利店",
    public uId: number,
    public uheaderImg: string,
    public uSignature: string
  ) { }
}





