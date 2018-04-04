import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

 

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
  // 得到字符串
  getQueryString() {
 
    this.queryString = this.navParams.get("queryString");
    console.log(this.queryString);
  }

  // 进入之后直接根据传进来的字符串,进行查询

  getSearchProductSearch() {
    this.apiService.searchProductSearch(this.queryString, this.shopid)
      .map(e => e.json())
      .subscribe(
        (item) => {
          console.log(item);
        }
      )
  }
}
