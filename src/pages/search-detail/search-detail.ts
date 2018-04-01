import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

/**
 * Generated class for the SearchDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"SearchDetailPage"
})
@Component({
  selector: 'page-search-detail',
  templateUrl: 'search-detail.html',
})
export class SearchDetailPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private apiService:ApiServiceProvider
  ) {
    // 进入之后直接根据传进来的字符串,进行查询
   this.getSearchProductSearch();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SearchDetailPage');
  // }


  
    // 进入之后直接根据传进来的字符串,进行查询

  getSearchProductSearch(){
    this.apiService.searchProductSearch("饼干")
    .map(e=>e.json())
    .subscribe(
      (item)=>{
        console.log(item);
      }
    )
  }
}
