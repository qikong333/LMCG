import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { NativeServiceProvider } from '../../providers/native-service/native-service';
import { elementAt } from 'rxjs/operators';

/**
 * Generated class for the CreateAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "EditeAddressPage"
})
@Component({
  selector: 'page-edite-address',
  templateUrl: 'edite-address.html',
})
export class EditeAddressPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiService: ApiServiceProvider,
    private nativeService: NativeServiceProvider,
    private renderer: Renderer
  ) {

    console.log(this.address);
  }

  addressId:number;
  userId: number;

  username: string;

  phone: number;

  provinceNameCode: number = 410000;

  cityNameCode: number = 410100;

  countyNameCode: number = 410105;


  provinceName: string;

  cityName: string;

  countyName: string;

  addressDetail: string;

  checkedDef: any = 0;
  // 接受参数用户ID
  // userId:number=parseInt(localStorage.getItem("userId"));

  // 接受参数用户ID
  address: any;
  ngOnInit() {
    this.userId = this.navParams.get("uId");
    this.address = this.navParams.get("address");
   this.addressId=this.address.addressId;
    this.userId = this.userId ? this.userId : parseInt(localStorage.getItem("userId"));

    this.username = this.address.username;

    this.phone = this.address.mobileno;

    this.provinceNameCode = 410000;

    this.cityNameCode = 410100;

    this.countyNameCode = 410105;


    this.provinceName = this.address.provinceName;

    this.cityName = this.address.cityName;

    this.countyName = this.address.countyName;

    this.addressDetail = this.address.addressDetail;

    this.checkedDef = 1;
    console.log(this.address);
    // console.log(1111111111111111111111111);

  }


  // DOM操作
  @ViewChild("userValue") userValue: ElementRef;
  @ViewChild("telValue") telValue: ElementRef;
  @ViewChild("detailsValue") detailsValue: ElementRef;
  @ViewChild("showToastBlock") toastBlock: ElementRef;
  clearText(kind) {
    // console.log(this.userValue.nativeElement.value  );
    switch (kind) {
      case "user":
        this.userValue.nativeElement.value = "";
        break;
      case "tel":
        this.telValue.nativeElement.value = "";
        break;
      case "details":
        this.detailsValue.nativeElement.value = "";
        break;
    }
  }
  // 页面加载完毕获取值
  // ionViewDidLoad() {
  // this.username=this.userValue.nativeElement.value ;
  // this.phone=parseInt(this.telValue.nativeElement.value );
  // // console.log(this.phone);
  // this.addressDetail =this.detailsValue.nativeElement.value ;
  // }

  // 成功修改地址并跳转回去

  //   showToastBlock() {

  //    let timerOut = setTimeout(()=>{


  //         clearTimeout(timerOut);
  //         // 返回上一级
  //         this.navCtrl.pop();

  //    },1000)
  // // this.toastBlock
  //   }
  // DOM操作END


  /**
   * @name 修改地址
   * @param    
   * 用户ID
   *  userId: number,
   * 收货人的名字
   *  username:string,
   *  收货人的电话
      phone:number,
      哪个省的数据库代码
      provinceNameCode:number,
        哪个市的数据库代码
      cityNameCode:number,
        哪个区的数据库代码
      countyNameCode: number,
  
      哪个省的名字
      provinceName:string,
      哪个市的名字
      cityName:string,
      哪个区的名字
      countyName:string,
      可能需要到的详细的地址
      addressDetail:string,
      校验
      checkedDef:any
   * 
   * 
   * 
   * 
   * 
  修改一个地址
  */

 updateAddress() {
    // this.time=3;
    this.apiService.updateAddress(

      this.addressId,
      this.userId,

      this.username,

      this.phone,

      this.provinceNameCode,

      this.cityNameCode,

      this.countyNameCode,


      this.provinceName,

      this.cityName,

      this.countyName,

      this.addressDetail,

      this.checkedDef
    )

      .subscribe(
        (item) => {
          // console.log(item);
          if (item.status == 200) {

            // this.showToastBlock();
            this.nativeService.showBlock("地址修改成功", 1000);
            let timerOut = setTimeout(() => {


              clearTimeout(timerOut);
              // 返回上一级
              this.navCtrl.pop();

            }, 1000)
          }
        })

  }
}






