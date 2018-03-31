import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { Component, ViewChild, ElementRef, Input } from '@angular/core';
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
  public arr_selceted = []              //选中的产品
  public all_statu = false        //全选按钮状态
  public sum_sprice = 0           //总价
  public sum_num =0               //总数量
   
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpServiceProvider, public alertCtrl: AlertController) {


  }

  ionViewDidLoad() {
    this.editStatu = false;
    this.listInfo()
  }

  ionViewWillEnter() {
  }


  // 购物车列表 
  listInfo() {
    let params = {
      shopid: localStorage.getItem('shopId'),
      page: 0,
      size: 50,
      tokenid: localStorage.getItem('tokenId'),
      userAgent: localStorage.getItem('userAgent'),
    }
    console.log(params);

    this.http.get('/api/shop/shopcar/odShopcarDetail/list', params)
      .map(r => r.json())
      .subscribe(r => {
        console.log(r);
        this.arrList = r.rows;
      })
  }


  // 删除所选
  delete() {

    let params = {
      tokenid: localStorage.getItem('tokenId'),
      userAgent: localStorage.getItem('userAgent'),
    }
    let arr;
    this.http.post('/api/shop/shopcar/odShopcarDetail/delete/' + arr, params)

  }

  //点击单个选项
  checkboxin(e) {
    
    let all = [].slice.call(document.querySelectorAll('input[type=checkbox]'));
    let lastInput = all[all.length - 1];
    let status = []
    let num = 0;
    let sparice = 0
    all.pop();
    all.forEach(item => {
      status.push(item.checked);
      
      if (item.checked) {
        num += Number(item.value);
        sparice += Number(item.value * item.textContent)
      }
    
    })
    if (status.indexOf(false) == -1) {
      lastInput.checked = true;
    } else {
      lastInput.checked = false;
    }

    this.sum_sprice = sparice;
    this.sum_num = num;
  


  }

  changeeditStatu() {
    this.editStatu = !this.editStatu;
    if (this.editStatu) {
      this.editText = "完成"
    } else {
      this.editText = "完成"
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

  }

}
 