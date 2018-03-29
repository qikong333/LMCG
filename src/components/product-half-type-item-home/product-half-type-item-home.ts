import { Component } from '@angular/core';

@Component({
  selector: 'product-half-type-item-home',
  templateUrl: 'product-half-type-item-home.html'
})
export class ProductHalfTypeItemHomeComponent {
 
  // 模拟产品分类块数据
  productList:ProductItem[] = [
    new ProductItem("折扣专区","便宜疯了 再不下单就下架啦",`assets/product/product_scroll_item.png`,`assets/product/product_scroll_item`),
    new ProductItem("进口零食","上班无聊聊 怎可以缺少","product_scroll_item","product_scroll_item"),
    new ProductItem("女神专场","三八女神节 让我们来关爱您","product_scroll_item","product_scroll_item"),
    new ProductItem("午夜食堂","夜深人静时 饿了怎么办","product_scroll_item","product_scroll_item"),
 
  ]
  constructor() {
     
  }

}
  // 产品scroll类型
  export class ProductItem{
    constructor(
      public title: string,
      public desc: string,
      public imgSrc1: string,
      public imgSrc2: string,
    ){}
  }
