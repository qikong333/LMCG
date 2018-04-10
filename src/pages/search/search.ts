import { ApiServiceProvider } from './../../providers/api-service/api-service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"SearchPage"
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams,public apiService :ApiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

/***********************************history-search*****************************************/

historySearch= JSON.parse(localStorage.getItem("historySearch")?localStorage.getItem("historySearch"):"[]")

 
ionViewDidEnter(){
  this.historySearch= JSON.parse(localStorage.getItem("historySearch")?localStorage.getItem("historySearch"):"[]")
  // localStorage.setItem("historySearch",JSON.stringify( this.historySearch))
}




/***********************************history-search*****************************************/

  // 参数声明
  userId:number;
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.userId = this.navParams.get("userId")?this.navParams.get("userId"):localStorage.getItem("userId");
  console.log(this.userId);
 
}




// 搜索
searchFormModel: FormGroup=new FormGroup({

  searchString:new FormControl()
})




onSubmit(event){
 
  if(event.keyCode==13){
 
    this.navCtrl.push("SearchDetailPage",{
      queryString: this.searchFormModel.value.searchString
    })
  }
  // this.apiService.searchProductSearch(this.searchFormModel.value.searchString)
  // .map(res=>res.json())
  // .subscribe((item)=>{
  //   console.log(item)
  // })
}

// 历史搜索嘛
pushHistoryPage(i){


  // alert(JSON.parse( localStorage.getItem("historySearch") )[i])
  this.navCtrl.push("SearchDetailPage",{

    queryString:JSON.parse( localStorage.getItem("historySearch") )[i]
  })

}

}
