import { ApiServiceProvider } from './../../providers/api-service/api-service';
import { NativeServiceProvider } from './../../providers/native-service/native-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage({
  name: 'PaySelectPage'
})
@Component({
  selector: 'page-pay-select',
  templateUrl: 'pay-select.html',
})
export class PaySelectPage {
  public payMoney //支付金额
  public payf1    //消费M卡
  public payf2    //消费积分
  public payf3    //投资M卡
  public payf4    //投资积分
  public     //账户余额
  public payye1   //消费M卡余额
  public payye2    //消费积分余额
  public payye3    //投资M卡余额
  public payye4    //投资积分余额
  public payye5    //账户余额余额
  public payName  //支付方式
  public checkedID;
  public coupText;//优惠文字
  public discount;//折扣数
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public native: NativeServiceProvider,
    public api: ApiServiceProvider,
  ) {

    // let data = this.navParams.get('param')
    // this.checkedID = data.checkedID;
    // this.Balance(data.dataList)
    // // console.log(this.radio4)
    // // console.log(this.aaa)
    // this.coupText = data.coupText;

  }

  ionViewDidLoad() {
    let aa = this.navParams.get('discountParams')



  }


  ionViewWillEnter() {
    this.checkedID = this.navParams.get('checkedID')
    console.log('选中id------------' + this.checkedID);
    this.api.isDiscounts(this.navParams.get('discountParams'))
      .map(r => r.json())
      .subscribe(r => {
        console.log(r);
        if (r.code == 200) {
          //查当前折扣
          this.api.getDiscountRatio()
            .map(d => d.json())
            .subscribe(d => {
              console.log(d);
              this.coupText = 'M卡支付享受' + d.data * 100 + '折'
              this.discount = d.data;
            })

        } else {

          this.coupText = r.message;
        }

      })


    /**
     * @name  查询余额
     */
    this.api.getBalanceAll()
      .map(r => r.json())
      .subscribe(r => {
        console.log(r);
        this.payye3 = this.pd(r.dataList[0].balance)
        this.payye4 = this.pd(r.dataList[1].balance)
        this.payye1 = this.pd(Number(r.dataList[2].balance) - Number(r.dataList[6].balance))
        this.payye2 = this.pd(r.dataList[3].balance)
        this.payye5 = this.pd(Number(r.dataList[4].balance) - Number(r.dataList[5].balance))
      })
  }


  pd(e) {
    if (e < 0) {
      return e = 0
    } else {
      return e
    }
  }

  /** 
 * 关闭模态框
 * 
 */
  closewin() {

    let all = [].slice.call(document.querySelectorAll("input"));
    let inputTrue = all.filter((tiem: any) => tiem.checked)

    if (inputTrue.length != 0) {
      let dataParam = { //回调参数
        payname: this.payName,
        checkedID: this.checkedID,
        balance: inputTrue[0].value,
        discount: this.discount,
      };
      console.log(dataParam);
      this.viewCtrl.dismiss(dataParam);
    } else {
      this.native.showToast("请选择支付方式!");
    }
  }


  /**
   * radio选中事件
   * @param e :$event
   * @param payname :支付方式
   */
  radioChange(e, payname, balance) {
    console.log(e);
    console.log(payname);
    switch (payname) {
      case 1:
        this.payName = "消费M卡"
        break;

      case 2:
        this.payName = "消费积分"
        break;

      case 3:
        this.payName = "投资M卡"
        break;

      case 4:
        this.payName = "投资积分"
        break;

      case 5:
        this.payName = "微信支付"
        break;

      default:
        break;
    }
    this.checkedID = payname
    let dataParam = { //回调参数
      payname: this.payName,
      checkedID: this.checkedID,
      balance: balance,
    };
    this.viewCtrl.dismiss(dataParam);

  }

  // Balance(data) {
  //   this.payye1 = this.pd(data[0].balance)  //消费M卡余额
  //   this.payye2 = this.pd(data[1].balance)   //消费积分余额
  //   this.payye3 = this.pd(Number(data[2].balance) - Number(data[6].balance))   //投资M卡余额
  //   this.payye4 = this.pd(data[3].balance)    //投资积分余额
  //   this.payye5 = this.pd(Number(data[4].balance) - Number(data[5].balance))    //账户余额余额
  // }




}

