import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// 服务提供器
import { ApiServiceProvider } from '../../providers/api-service/api-service';

/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "MinePage"
})
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    public apiService: ApiServiceProvider
  ) {

    this.getMsMember();
  }



  /****
   * 
   * @returns [全部变量]
   * 
   * 
   * 
   * **********/
  // 用户基本信息
  mineInfo: any;
  




  /**
   * @author 七月
   * @reslove API
   * @return 会员信息
   *  
   */
  getMsMember() {
    this.apiService.msMember()

      .map(e => e.json())

      .subscribe(
        (item) => {
          if (item.code == 200) {
            // console.log(2000);
            this.mineInfo = item;
            // console.log(this.mineInfo);
            
            // this.mineInfo.uId = item.memberId;
            // this.mineInfo.headerImg = item.avatarpath;
          }
          console.log(item)

        },
        (err) => { console.error("无法得到用户信息")},
        () => { console.log("getMsMember() is ends")})


  }}

/**
 * @author 七月
 * @returns [name,id,headerImg]
*/
// export class MineInfo {
//   constructor(
//     public uName: string = "便利店",
//     public uId: number,
//     public headerImg: string
//   ) { }
// }