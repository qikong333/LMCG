import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelectStorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 */
// declare var AMap;
@IonicPage({
  name: "SelectStorePage"
})
@Component({
  selector: 'page-select-store',
  templateUrl: 'select-store.html',
})
export class SelectStorePage {
  map: any;//地图对象
  datas: any;//云图数据
  formattedAddress: string;//当前位置
  latname: string;//
  lngname: string;//
  datat:any;//不带距离的云图数据
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.latname = localStorage.getItem('latname');
    this.lngname = localStorage.getItem('lngname');
    this.datas=JSON.parse(localStorage.getItem('Distanceretrieval'));
    this.datat=JSON.parse(localStorage.getItem('Nondistanceretrieval'));
    this.formattedAddress=localStorage.getItem('formattedAddress');
    // console.log(this.datas)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectStorePage');
  }

  ngOnInit() {

  }

  Repositioning(){//重新定位
    window.location.reload() 
  }
}
