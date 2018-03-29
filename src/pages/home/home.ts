
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import "Rxjs/Rx";
import { map, filter, scan } from 'rxjs/operators';

// 测试api,勿删
import {AipServiceProvider} from "../../providers/aip-service/aip-service";

@IonicPage({
  name:"HomePage"
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController,private aipServiceProvider:AipServiceProvider) {
      this.testController();
   }



  // 得到数据测试1
  testController(){
    // return this.aipServiceProvider.itemInfo(11);

    this.aipServiceProvider.itemInfo(1)
    // .map(e=>e.json())
 
    // .subscribe(
    //   (e)=>{console.log(e)}

    // )
    .map(r => r.json())
    .subscribe(r => {
      console.log(r);})


    // this.aipServiceProvider.

  }

}
