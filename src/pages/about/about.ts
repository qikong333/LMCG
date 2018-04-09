import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { odProduct } from '../../module/odProduct';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  a: odProduct
  constructor(public navCtrl: NavController,
  ) {



  }
  ionViewDidEnter() {
    let c= []
    let a = [
      { a: 1, b: 2 },
      { a: 3, b: 4 }
    ]

    let reformattedArray = a.map( (obj)=> {
      let rObj;
      rObj= obj.a;
      return rObj;
    });

    console.log(reformattedArray);




  //  let b={
  //    c:0
  //  }


  //  a.map(e => {
  //    console.log(e);
     
  //   b.c = e.a
  //   c.push(b)
  //  });

  //  console.log(c);
   
//最终输出c=[{c:3},{c:3}], 我想要的结果的c=[{c:1},{c:3}]
  }



}
