import { NativeServiceProvider } from './../../providers/native-service/native-service';
import { filter } from 'rxjs/operators';
import { odProduct } from './../../module/odProduct';
import { ApiServiceProvider } from './../../providers/api-service/api-service';
import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { Component, ViewChild, ElementRef, Input, Attribute } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CarListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'CarListPage'
})
@Component({
  selector: 'page-car-list',
  templateUrl: 'car-list.html',
})
export class CarListPage {

  public arrList;    //获取购物车列表
  public editStatu: boolean = true;  //编辑状态
  public editText: string = "编辑"      //右上角文字
  public arr_selceted_item = []              //选中的产品
  public arr_selceted_num = []              //选中的产品下标
  public all_statu = false        //全选按钮状态
  public sum_sprice = 0           //总价
  public sum_num = 0               //总数量
  public itemParam       //产品数据格式
  public deleteIDs = [];            //要删除的商品id
 
  public deleteSelect = [];//选中的数组

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpServiceProvider,
    public alertCtrl: AlertController,
    public api: ApiServiceProvider,
    public native: NativeServiceProvider,
  ) {


  }

  ionViewDidLoad() {
    this.editStatu = false;
    this.listInfo()
  }

  ionViewWillEnter() {

  }


  // 购物车列表 
  listInfo() {
    this.api.listInfo()
      .map(r => r.json())
      .subscribe(r => {
        console.log(r);
        this.arrList = r.rows;
      })

  }


  // 
  /**
   * @name  
   * @param e :商品id
   * @param i :商品下标
   */
  getDeleteID(e, i) {
    // 获取删除的商品id
    this.deleteIDs.push(e)

    //删除当前html
    this.arrList.splice(i, 1)
  }

  // 删除所选
  delete() {
    console.log(this.deleteIDs);
    this.api.delete(this.deleteIDs.toString())
      .map(r => r.json())
      .subscribe(r => {
        console.log(r);

      })

  }

  //点击单个选项
  checkboxin(e, item) {
    this.getChecked()
    // console.log(e);
    // console.log(e.target.checked);
    // if (e.target.checked) {

    //   this.arr_selceted.push(item)
    //   console.log(this.arr_selceted);

    // }else{
    //   // this.arr_selceted
    // }

    // let all = [].slice.call(document.querySelectorAll('input[type=checkbox]'));
    // let lastInput = all[all.length - 1];
    // let status = []
    // let num = 0;
    // let sparice = 0
    // all.pop();
    // all.forEach(item => {
    //   status.push(item.checked);

    //   if (item.checked) {
    //     num += Number(item.value);
    //     sparice += Number(item.value * item.textContent)
    //   }

    // })
    // if (status.indexOf(false) == -1) {
    //   lastInput.checked = true;
    // } else {
    //   lastInput.checked = false;
    // }

    // this.sum_sprice = sparice;
    // this.sum_num = num;



  }

  changeeditStatu() {
    this.editStatu = !this.editStatu;
    if (this.editStatu) {
      this.editText = "完成"
    } else {
      this.editText = "编辑"
      this.delete();
    }

  }

  //全选
  checkboxall(e) {
    
    let num = 0;
    let sparice = 0
    console.log(e);
    let all = [].slice.call(document.querySelectorAll('input[type=checkbox]'));
    if (e.target.checked) {
      all.forEach(item => {
        item.checked = true;
      })
    } else {
      all.forEach(item => {
        item.checked = false;
      })
    }

    all.pop();
    all.forEach(item => {

      if (item.checked) {
        num += Number(item.value);
        sparice += Number(item.value * item.textContent)
      }

      this.sum_sprice = sparice;
      this.sum_num = num;

    })

    this.getChecked()

  }

  //跳转到确认支付信息页面
  toOrderSubmission() {

    console.log(this.sum_sprice);
    console.log(this.sum_num);

    this.buildup(this.arrList)

    if (this.arr_selceted_item.length != 0) {
      this.navCtrl.push('OrderSubmissionPage', { datas: this.arr_selceted_item })
    } else {
      this.native.showToast('请选择想购买的产品')
    }



    // let arrNum = [];  //选中的下标集合
    // let attItem = [];   //选中的产品集合


    // let all = [].slice.call(document.querySelectorAll('input[type=checkbox]'));
    // let item = all.filter(r => r.id != 'all')
    // console.log(item);

    // item.forEach(e => {

    //   if (e.checked) {
    //     attItem.push(this.arrList[e.id])
    //   }
    // });
    // console.log(attItem);



  }



  //获取全部选中的项目
  getChecked() {
    let arrItemID = [];   //选中的下标集合
    let arrSelect = [];   //选中的数组集合

    let all = [].slice.call(document.querySelectorAll('input[type=checkbox]'));
    let item = all.filter(r => r.id != 'all')  //去全选按钮
    //获取选中的
    item.forEach(e => {
      if (e.checked) {
        arrItemID.push(e.id)

        arrSelect.push(this.arrList[e.id])
        console.log(e.id)

      }
    });
    console.log(arrItemID);
    console.log(arrSelect);

    

    this.arr_selceted_num = arrItemID;
    this.deleteSelect = arrSelect;

    this.buildup(this.arrList)


  }


  //数量改变促发
  onUpdate(data, i) {
    this.arrList[i].car.productQty = data.number;
    this.getChecked()
  }


  //组装传送参数
  buildup(arr) {

    let sum_num = 0;      //选中的数量和
    let sum_sprice = 0;   //选中的总价格

    let arry = this.arrList.map((e) => {
      let obj = {
        shopid: localStorage.getItem('shopId'),//商店ID
        itemid: ' ',//ID
        pid: ' ',//商品ID
        productName: ' ',//商品名称
        productTitle: ' ',//商品标题
        productQty: 0,//商品数量
        salePrice: 0,//商品单价
        productTotleprice: 0, //商品总价
        mainpic: ' ',  //图片url
        isUseActivity: 0,//是否是活动价(0:否,1:是)
      };

      obj.itemid = e.prod.itemid;
      obj.pid = e.prod.pid;
      obj.productName = e.prod.name;
      obj.productTitle = e.prodctitle;
      obj.productQty = e.car.productQty;
      obj.salePrice = e.prod.sprice;
      obj.productTotleprice = e.prod.sprice * e.car.productQty;
      obj.mainpic = e.prod.mainpic;
      return obj;
    })

    console.log(arry); //重组完成
    // 取出选中的
    let s = []
    this.arr_selceted_num.forEach((e) => {
      s.push(arry[e])
    })
    this.arr_selceted_item = s
    console.log(this.arr_selceted_item);


    //计算总价合总数
    s.forEach(e => {
      sum_num += Number(e.productQty);
      sum_sprice += Number(e.productTotleprice);
    })
    console.log(sum_sprice);
    console.log(sum_num);
    this.sum_sprice = sum_sprice;
    this.sum_num = sum_num;
  }


  DeleteAll(){
    
    console.log(this.arrList);
    
    for (let i = 0; i < this.arr_selceted_num .length; i++) {

      // 获取删除的商品id
      this.deleteIDs.push(this.deleteSelect[i].car.shopcarId)

      //删除当前html
      // this.arrList.splice(this.arr_selceted_num[i], 1)
     this.arrList =  this.arrList.filter(r => r.car.shopcarId != this.deleteSelect[i].car.shopcarId)
    } 
  }

}
