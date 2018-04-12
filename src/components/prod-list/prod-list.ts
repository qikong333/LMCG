import { NavController } from 'ionic-angular';
import { Component, Input } from '@angular/core';

 
@Component({
  selector: 'prod-list',
  templateUrl: 'prod-list.html'
})
export class ProdListComponent {

  // 导入的数据
  @Input('datas') datas;

  @Input('orderby') orderby;
  public Arr_car = []              //购物车数组        
  public Arr_car_end = []          //购物车数组结果 
  public local_num_sum = 0            //本地购物车总数量
  public local_sprice_sum = 0         //本地购物车总数量
  text: string;

  constructor(public navCtrl:NavController) {
    console.log('Hello ProdListComponent Component');
    this.text = 'Hello World';
  }

  // 跳转详情页面
  toItemDetail(data) {
    this.navCtrl.push('ItemDetailPage', { data: data })
  }



  onUpdate(data) {
    let a = [] //存放数组
    let num_sum = 0
    let sprice_sum = 0

    this.Arr_car.push(data)

    let arr = this.Arr_car.reduce((map, cur) => {
      map[cur.goods] = cur;
      return map
    }, {})

    for (let key in arr) {
      a.push(arr[key]);
    }

    this.Arr_car_end = a.filter(e => e.number != 0);

    console.log(this.Arr_car_end);

    this.Arr_car_end.forEach(e => {
      num_sum = e.number + num_sum;
      sprice_sum = e.sprice * e.number + sprice_sum;
    })
    this.local_num_sum = num_sum;
    this.local_sprice_sum = sprice_sum;


  }

}
