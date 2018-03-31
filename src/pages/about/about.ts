import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpServiceProvider } from './../../providers/http-service/http-service';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
a
  constructor(public navCtrl: NavController,
     public http: HttpServiceProvider) {

 
    
  }

  // onUpdate(e){
  //   let params = {
  //     code: 10,
  //     isparent: 1
  //   }
  //   console.log(params);

  //   this.http.get('/api/shop/home/list/' + localStorage.getItem('shopId'), params)
  //     .map(r => r.json())
  //     .subscribe(r => {
  //       console.log('首页商品列表');
  //       console.log(r);


  //     })
  // }

}
