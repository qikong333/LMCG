import { Component } from '@angular/core';
 import {NavController } from "ionic-angular";

//  页面导入列表
import { SearchPage } from "../../pages/search/search";

 
@Component({
  selector: 'header-home',
  templateUrl: 'header-home.html'
})
export class HeaderHomeComponent {

 
  constructor(private  navController:NavController ) {}
     
  popAlert(){
    alert(666);
  }

  // 函数列表,跳转到搜索页面
  pushSearchPage(){
    this.navController.push(SearchPage, {
      id: "123",
      name: "Carl"
    });
  }
}
