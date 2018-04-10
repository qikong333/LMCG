import { NativeServiceProvider } from './../../providers/native-service/native-service';
import { ApiServiceProvider } from './../../providers/api-service/api-service';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PublicServiceProvider } from '../../providers/public-service/public-service';
import { JSEncrypt } from "../../assets/js/jsencrypt.js"
// import  * as JSEncrypt from "../../assets/js/jsencrypt.js"


@IonicPage({
  name: 'OrderSubmissionPage'
})
@Component({
  selector: 'page-order-submission',
  templateUrl: 'order-submission.html',
})
export class OrderSubmissionPage {
  username;    //用户名
  usertel;     //用户电话号码
  address;     //默认地址ss
  coupontext;   //优惠券文字
  getParams = [];    //获取传递过来的参数
  timeSelect = [];    //时间选项     
  timed                //选中的时间
  Distributioned      //选中的配送方式
  now  // 年月日的转换
  isDiscounts: boolean  //是否享有折扣
  payName = "微信支付"           //支付方式名称
  payUrl = "assets/imgs/weixin.png"     //支付图像
  payTip = false          //支付提示文字
  isAddress: boolean;        //是否存在地址
  checkedID: number;      //选中的id
  OrderOkParam = false        //确认订单状态
  discount = 1;        //折扣数
  discountParams;  //折扣数参数
  discountText;    //折扣文字返回
  orderID;         //订单号
  shopName: string; //商店名称


  odBase = {//提交订单参数1
    shopid: localStorage.getItem('shopId'), //商店ID
    transportType: ' ',//配送方式(0:配送,1:自提)
    transportStartTime: '',//配送开始时间:(yyyy-MM-dd HH:mm:ss)
    transportEndTime: '',//配送结束时间
    userAddress: '',//收货人地址
    userName: '',//收货人名称
    userMobile: '',//收货人电话
    isUseCoupon: 0, //是否使用优惠券(0:不使用,1:已使用) ==》此版本没有优惠券
    couponId: ' ', //优惠券ID  ==》此版本没有优惠券
    couponMsPassRelationId: ' ',//优惠券关联ID  ==》此版本没有优惠券
    usedCouponAmount: 0,//优惠券金额  ==》此版本没有优惠券
    orderTotalprice: 0,//订单总价(所有商品单价*数量的和)
    receivable: 0,//应收(订单总价-优惠券金额)  ==》此版本没有优惠券
    payType: 1 //支付状态  1:表示微信，2.M卡支付 3.混合支付  4:表示支付宝 
  }
  odProductList = []    //提交订单参数2


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiServiceProvider,
    public publicservice: PublicServiceProvider,
    public modalCtrl: ModalController,
    public native: NativeServiceProvider,
  ) {
    this.timeSelect = this.publicservice.nowTimeSelect()
    this.timed = this.timeSelect[0]
    this.shopName = JSON.parse(localStorage.getItem('localshop'))._name;

    // 年月日的转换
    const formatDate = (time: any) => {
      // 格式化日期，获取今天的日期
      const Dates = new Date(time);
      const year: number = Dates.getFullYear();
      const month: any = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
      const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
      return year + '-' + month + '-' + day;
    };
    this.now = formatDate(new Date().getTime());
  }



  ionViewCanEnter() {

    //获取参数
    this.getParams = this.navParams.get('datas')
    console.log(this.getParams);
    
    // 算订单总价
    this.sum();

    //默认地址
    this.api.getAddressDefByPassId()
      .map(r => r.json())
      .subscribe(r => {
        console.log(r);
        if (r.code == 200) {
          this.isAddress = true;
          this.odBase.userMobile = r.username;
          this.odBase.userMobile = r.mobileno;
          this.odBase.userAddress = r.provinceName + r.cityName + r.countyName + r.addressDetail
        } else {
          this.isAddress = false;
        }

      })

    //优惠券
    this.api.couponActivityListByPassId()
      .map(r => r.json())
      .subscribe(r => {
        console.log(r);
        if (r.content.length != 0) {
          this.coupontext = '请选择优惠券'
        } else {
          this.coupontext = '暂无可用'
        }
      })


    //个人余额
    this.api.getBalanceAll()
      .map(r => r.json())
      .subscribe(r => {
        console.log(r);

      })


    //是否有折扣
    let arr = []
    this.getParams.forEach(e => {
      arr.push(e.pid)
    });
    this.api.isDiscounts(arr)
      .map(r => r.json())
      .subscribe(r => {
        console.log(r);
        if (r.code == 200) {
          this.isDiscounts = true;
          this.api.getDiscountRatio()
            .map(d => d.json())
            .subscribe(d => {
              console.log(d);
              this.discountText = d.data

            })
        } else {
          this.isDiscounts = false;
          this.discountText = r.message;
        }

      })


  }


  //订单提交
  submit() {


    // 先处理时间的格式
    this.odBase.transportStartTime = this.now + ' ' + this.timed.substr(0, 5) + ':00';
    this.odBase.transportEndTime = this.now + ' ' + this.timed.substr(6, 10) + ':00';
    // 空值判断
    if (this.odBase.transportType == " ") {
      console.log(this.odBase.transportType);
      this.native.showToast('请选择配送方式');
      return
    }

    if (!this.odBase.transportStartTime) {
      console.log(this.odBase.transportStartTime);
      this.native.showToast('请选择配送时间');
      return
    }

    if (!this.odBase.userAddress) {
      console.log(this.odBase.userAddress);
      this.native.showToast('请选添加收件人地址');
      return
    }

    // 算订单总价
    this.sum();


    console.log(this.odBase);

    console.log(this.getParams);


    // t弹出确认订单页面
    let toorderParmas = {
      payName: this.payName, //支付方式
      payUrl: this.payUrl,  //支付图标
      receivable: this.odBase.receivable,  //价格
      isDiscounts: this.isDiscounts  // 是否有烟酒
    }
    console.log(toorderParmas);

    let orderok = this.modalCtrl.create('OrderOkPage', { OrderOkParam: toorderParmas, discountParams: this.discountText });
    orderok.onDidDismiss(b => {
      if (b.OrderOkParam) {

        this.api.submitOrder(this.odBase, this.getParams)
          .map(r => r.json())
          .subscribe(r => {
            console.log(r);
            if (r.code == 200) {
              this.orderID = r.orderNo;
              //预支付信息生成
              this.api.generatePayment(r.orderNo, this.odBase.receivable)
                .map(t => t.json())
                .subscribe(t => {
                  console.log(t);


                  // 弹出输入密码界面
                  this.native.showToast(r.msg);
                  let profileModal = this.modalCtrl.create('PayPasswordPage');
                  profileModal.onDidDismiss(d => {
                    console.log(d);
                    if (d.pass) {
                      let encrypt = new JSEncrypt()
                      encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----' + t.data.publicKey + '-----END PUBLIC KEY-----')
                      let obj = {
                        'userToken': localStorage.getItem('userToken'),
                        'userCode': localStorage.getItem('userCodes'),
                        'userAgent': localStorage.getItem('userAgent'),
                        'paymentPassword': d.pass,
                        'paymentType': this.checkedID,
                        'prepayNo': t.data.prepayNo,
                        'timestamp': t.systemTime
                      }
                      console.log(obj);

                      let rsajm = encrypt.encryptLong(JSON.stringify(obj))

                      this.api.confirmPay(t.data.prepayNo, t.systemTime, rsajm, (1 - this.discount) * this.odBase.receivable, this.orderID)
                        .map(a => a.json())
                        .subscribe(a => {
                          console.log(a);

                        })
                    }
                  });
                  profileModal.present();
                })

            } else {
              this.native.showToast("订单提交失败：" + r.msg);
            }

          })
      } else {
        return
      }
    })
    orderok.present();


  }

  //M卡支付
  Mpay() {

  }

  //微信支付
  wxPay() {

  }



  //打开支付选中方式
  openPaySelect() {
    this.payTip = true
    let arr = []
    this.getParams.forEach(e => {
      arr.push(e.pid)
    });
    console.log(arr);
    this.discountParams = arr;

    console.log("传送的id----------" + this.checkedID);

    let profileModal = this.modalCtrl.create('PaySelectPage', { discountParams: arr, checkedID: this.checkedID });
    profileModal.onDidDismiss(d => {
      console.log(d);

      this.payName = d.payname;
      this.checkedID = d.checkedID;
      console.log('接受的id------------' + this.checkedID)
      switch (d.checkedID) {
        case 1:
          this.payUrl = "assets/imgs/icon_Payment_SCard.png"
          break;

        case 2:
          this.payUrl = "assets/imgs/icon_Payment_Star.png"
          break;

        case 3:
          this.payUrl = "assets/imgs/icon_Payment_SCard.png"
          break;

        case 4:
          this.payUrl = "assets/imgs/icon_Payment_Star.png"
          break;

        case 5:
          this.payUrl = "assets/imgs/weixin.png"
          break;

        default:
          break;
      }

      if (d.checkedID == 5) {
        this.odBase.payType = 1;
      } else {
        this.odBase.payType = 2;
      }
    });
    profileModal.present();

  }

  //算总价，优惠价，需付
  sum() {

    // 算订单总价
    let sum = 0
    this.getParams.forEach(e => {
      sum += e.productTotleprice;
    })
    console.log(sum);

    this.odBase.orderTotalprice = sum;  //订单总价(所有商品单价*数量的和)
    this.odBase.receivable = this.odBase.orderTotalprice - this.odBase.usedCouponAmount;  //应收(订单总价-优惠券金额)  ==》此版本没有优惠券

  }


  toReceivingAddress() {
    this.navCtrl.push('ReceivingAddressPage')
  }

  toStoreDetails() {
    this.navCtrl.push('StoreDetailsPage')
  }


}
