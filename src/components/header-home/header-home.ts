import { Component } from '@angular/core';
 import {NavController } from "ionic-angular";

//  页面导入列表
import { SearchPage } from "../../pages/search/search";

 
@Component({
  selector: 'header-home',
  templateUrl: 'header-home.html'
})
export class HeaderHomeComponent {


  constructor(private navCtrl: NavController) { }

 


/************************************七月*****************************************/
 /**
  * @name 以下都是push操作
  * 
  * 
  */



  // 函数列表,跳转到搜索页面

  // 搜索页面

  //  进入搜索页面
  // 参数为用户的ID
  pushSearchPage() {
    this.navCtrl.push("SearchPage", {
      uId: localStorage.getItem("userId")
    })
  }
}
