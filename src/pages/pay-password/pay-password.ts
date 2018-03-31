import { NativeServiceProvider } from './../../providers/native-service/native-service';
import { ApiServiceProvider } from './../../providers/api-service/api-service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Md5 } from 'ts-md5/dist/md5';
 

@IonicPage({
  name:'PayPasswordPage'
})
@Component({
  selector: 'page-pay-password',
  templateUrl: 'pay-password.html',
})
export class PayPasswordPage {
  @ViewChild('input') myInput:any;

  pass            //密码
  userCode: any; //用户ID
  token: any;    //用户密钥
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl:ViewController,
    public api:ApiServiceProvider,
    public native:NativeServiceProvider,
  ) {
  }

  ionViewDidLoad() {
    
  }

  ionViewDidEnter(){
    
    //弹出键盘
    // setTimeout(() => {
    //   this.myInput.foucs();
    // }, 2000);
  }


  changesValue(e){
    
        if (e.length == 6) {

          let pass_EXP = /^\d{6}$/;
          if (pass_EXP.test(this.pass)) {

            let p = Md5.hashStr(this.pass).toString();//转换MD5
           
            this.viewCtrl.dismiss({
              passYes: true,
              pass: p  });
          } else {
            this.native.showToast("请正确设置6位数字密码！");
          }
      }
  }
 
}
