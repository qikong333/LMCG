import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'CarListPage'
})
@Component({
  selector: 'page-car-list',
  templateUrl: 'car-list.html',
})
export class CarListPage {
 public arrList ;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpServiceProvider) {

    
  }

  ionViewDidLoad() {
    
    this.listInfo()
  }


  // 购物车列表 
  listInfo(){
    let params = {
      shopid: localStorage.getItem('shopId'), 
      page: 0, 
      size: 50, 
      tokenid: localStorage.getItem('tokenId'), 
      userAgent: localStorage.getItem('userAgent'),
    }
    console.log(params);
    
    this.http.get('/api/shop/shopcar/odShopcarDetail/list', params)
    .map(r=>r.json())
    .subscribe(r=>{
      console.log(r);
      this.arrList = r.rows;
    })
  }


  // 删除所选
  delete(){

    let params ={
      tokenid: localStorage.getItem('tokenId'), 
      userAgent: localStorage.getItem('userAgent'),
    }
    let arr;
    this.http.post('/api/shop/shopcar/odShopcarDetail/delete/' + arr,params)

  }

}
