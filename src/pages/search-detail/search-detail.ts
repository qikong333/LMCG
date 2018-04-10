import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

import "Rxjs/Rx";
/**
 * Generated class for the SearchDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "SearchDetailPage"
})
@Component({
  selector: 'page-search-detail',
  templateUrl: 'search-detail.html',
})
export class SearchDetailPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private apiService: ApiServiceProvider
  ) {
    // 得到字符串
    this.getQueryString()
    // 进入之后直接根据传进来的字符串,进行查询
    this.getSearchProductSearch();
  }

  queryString: string;
  shopid: number = Number(localStorage.getItem("shopId"));

  /***********************************history-search*****************************************/

  // 历史搜索
  historySearch = [];
  /***********************************history-search*****************************************/

  // 得到字符串
  getQueryString() {

    this.queryString = this.navParams.get("queryString");
    console.log(this.queryString);

    this.historySearch = JSON.parse(localStorage.getItem("historySearch") ? localStorage.getItem("historySearch") : "[]");

    // 判断是否已经存在,如果不存在则push
    console.log(this.historySearch);

    console.log(this.historySearch.filter(item => item == this.queryString));
    if (!!!(this.historySearch.filter(item => item == this.queryString))) {
      this.historySearch.push(this.queryString);
    } else {
      console.log("呵呵");
    }



    localStorage.setItem("historySearch", JSON.stringify(this.historySearch))
    console.log(localStorage.getItem("historySearch"));




  }

  // 进入之后直接根据传进来的字符串,进行查询

  getSearchProductSearch() {
    this.apiService.searchProductSearch(this.queryString, this.shopid)
      // .timeout(3000)
      .map(e => e.json())
      .subscribe(
        (item) => {
          console.log(item);
        }
      )
  }
  /****************************辅助类函数********************************/
  // Array.prototype.in_array = function (element) { 

  //   　　for (var i = 0; i < this.length; i++) { 

  //   　　if (this[i] == element) { 

  //   　　return true; 

  //       } 

  //     } return false; 

  //   }

  /************************************************************************************/

}
