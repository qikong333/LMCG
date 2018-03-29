import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreateAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"CreateAddressPage"
})
@Component({
  selector: 'page-create-address',
  templateUrl: 'create-address.html',
})
export class CreateAddressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAddressPage');
  }

  @ViewChild("userValue") userValue: ElementRef;
  @ViewChild("telValue") telValue: ElementRef;
  @ViewChild("detailsValue") detailsValue: ElementRef;

clearText(kind){
  // console.log(this.userValue.nativeElement.value  );
  switch(kind){
    case "user":
    this.userValue.nativeElement.value  = "";
    break;
    case "tel":
    this.telValue.nativeElement.value = "";
    break;
    case "details":
    this.detailsValue.nativeElement.value = "";
    break;
  }
}

}
