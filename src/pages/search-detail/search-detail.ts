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
    this.getSearchProductSearch(1);
  }


  // 搜索结果的数组变量
  searchResult=[];
  // 查询字符串的变量
  queryString: string;

  // 本地的ID
  shopid: number = Number(localStorage.getItem("shopId"));

  // 页码
  pagenum = 1
  /***********************************history-search*****************************************/

  // 历史搜索
  historySearch = [];
  /***********************************history-search*****************************************/

  // 得到字符串
  getQueryString() {
    // 得到搜索的词语===.>>重要这里是用户搜索的词语,
    this.queryString = this.navParams.get("queryString");
    // 得到热门搜索传递过来的参数,hot=666.如果得到了hot参数, 不需要加入本地存储,然后直接return掉,不加入本地存储,STR

    let hot = this.navParams.get("hot");
    if (hot == 666) {
      return;
    }
    // 得到热门搜索传递过来的参数,hot=666.如果得到了hot参数, 不需要加入本地存储,然后直接return掉,不加入本地存储,END

    console.log(this.queryString);

    this.historySearch = JSON.parse(localStorage.getItem("historySearch") ? localStorage.getItem("historySearch") : "[]");

    // 判断是否已经存在,如果不存在则push
    // console.log(this.historySearch);

    // console.log(this.historySearch.filter(item => item == this.queryString));
    if (this.historySearch.filter(item => item == this.queryString).length === 0) {

      // 这里开始处理数组的长度,长度最长不能超过十个, 如果超过了是个,那么需要先pop一个最后的
      if (this.historySearch.length == 10) {
        this.historySearch.pop();
      }
      this.historySearch.unshift(this.queryString);
    } else {
      console.log("呵呵");
    }



    localStorage.setItem("historySearch", JSON.stringify(this.historySearch))
    console.log(localStorage.getItem("historySearch"));




  }

  // 进入之后直接根据传进来的字符串,进行查询

  getSearchProductSearch(num) {

    let d = {}
    this.apiService.searchProductSearch(this.queryString, num)
      // .timeout(3000)
      .map(e => e.json())
      .subscribe(
        (item) => {
          let r = item.data.docs;
  

          for (let i = 0; i < r.length; i++) {
            d['mainpic'] = r[i].mainpic;
            d['name'] = r[i].contents.name;
            d['sprice'] = r[i].prices.split(",")[1];
            d['stocknum'] = r[i].available;
            d['itemid'] = r[i].docid;

            this.searchResult.push(d)
            
          }

          console.log(r);
         
          console.log(this.searchResult);
        }
      )
  }
 
  // doInfinite(e){
  //   setTimeout(() => {
    
      
  //     this.getSearchProductSearch(this.pagenum)
  //   }, 3000);

  //   this.pagenum++;
  //   console.log(this.pagenum);
  
  // }

async doInfinite(){
  this.pagenum++;
  await setTimeout(()=>{
    this.getSearchProductSearch(this.pagenum)
  },500)
}

  // doInfinite(): Promise<any> {
  //   this.pagenum++;
  //   console.log('Begin async operation');

  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       this.getSearchProductSearch(this.pagenum)

  //       console.log('Async operation has ended');
  //       resolve();
  //     }, 500);
  //   }
  // )
  // }

}
