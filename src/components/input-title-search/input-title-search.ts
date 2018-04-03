import { Component } from '@angular/core';

import { NavController } from "ionic-angular";



@Component({
  selector: 'input-title-search',
  templateUrl: 'input-title-search.html'
})
export class InputTitleSearchComponent {


  constructor(private navController: NavController) {

  }

  searchString: string = "雀巢咖啡";
  // DOM操作
  // 当获得焦点的时候,清空字符

  clearDafult() {
    this.searchString = "";
  }


  // 返回首页
  cancelText() {

    this.navController.pop();
  }


  // 进入搜索结果页面
  pushSearchDetail(event) {
    console.log(   this.searchString);
    // console.log(event);
    if (event.keyCode == 13) {
      this.navController.push("SearchDetailPage", {
        queryString: this.searchString
      })
    }

  }

}
