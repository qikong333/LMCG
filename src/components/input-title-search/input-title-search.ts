import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController } from "ionic-angular";



@Component({
  selector: 'input-title-search',
  templateUrl: 'input-title-search.html'
})
export class InputTitleSearchComponent {


  constructor(private navController: NavController) {

  }


  // @ViewChild("searchInput") searchInput: ElementRef;

  // @ViewChild("defaultText") defaultText: ElementRef;
  searchString: string = "后台的1111111111数";

  // clear() {
  //   console.log(this.searchString);
  //   this.defaultText.nativeElement.innerHTML = "";
  // }
  // defaultInput() {
  //   this.defaultText.nativeElement.innerHTML = this.searchString;
  // }

  
  // 返回首页
  cancelText() {

    this.navController.pop();
  }


  // 进入搜索结果页面
  pushSearchDetail(event) {
    // console.log(event);
    if(event.keyCode == 13){
    this.navController.push("SearchDetailPage", {

    })
    }

  }

}
