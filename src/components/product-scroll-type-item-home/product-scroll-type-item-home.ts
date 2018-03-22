import { Component, AfterViewInit } from '@angular/core';










// import { Subscription, Observable } from "rxjs";
/**
 * Generated class for the ProductScrollTypeItemHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-scroll-type-item-home',
  templateUrl: 'product-scroll-type-item-home.html'
})
export class ProductScrollTypeItemHomeComponent implements AfterViewInit {


  productItemTitle:Array<string> = ["六沐精选",'啤酒',"零食","饮品"];


  // 模拟产品scroll数据
  // 六沐精选
  productList: ProductItem[] = [
    new ProductItem("太平梳打饼干", 4.00, "图片名字路径"),
    new ProductItem("韩国宾格瑞牛奶", 6.00, "图片名字路径"),
    new ProductItem("卡士椰果粒鲜...", 6.00, "图片名字路径"),
    new ProductItem("得宝迷你纸巾", 26.66, "图片名字路径"),
    new ProductItem("太平梳打饼干", 4.00, "图片名字路径"),
    new ProductItem("太平梳打饼干", 4.00, "图片名字路径"),
    new ProductItem("韩国宾格瑞牛奶", 6.00, "图片名字路径"),
    new ProductItem("卡士椰果粒鲜...", 6.00, "图片名字路径"),
    new ProductItem("得宝迷你纸巾", 26.66, "图片名字路径"),
    new ProductItem("太平梳打饼干", 4.00, "图片名字路径"),

  ]

  // 模拟产品scroll数据
  //  啤酒
  productList1: ProductItem[] = [
    new ProductItem("太平梳打饼干", 4.00, "图片名字路径"),
    new ProductItem("韩国宾格瑞牛奶", 6.00, "图片名字路径"),
    new ProductItem("卡士椰果粒鲜...", 6.00, "图片名字路径"),
    new ProductItem("得宝迷你纸巾", 26.66, "图片名字路径"),
    new ProductItem("太平梳打饼干", 4.00, "图片名字路径"),
    new ProductItem("太平梳打饼干", 4.00, "图片名字路径"),
    new ProductItem("韩国宾格瑞牛奶", 6.00, "图片名字路径"),
    new ProductItem("卡士椰果粒鲜...", 6.00, "图片名字路径"),
    new ProductItem("得宝迷你纸巾", 26.66, "图片名字路径"),
    new ProductItem("太平梳打饼干", 4.00, "图片名字路径"),


  ]
  // 模拟产品scroll数据
  // 零食
  productList2: ProductItem[] = [
    new ProductItem("太平梳打饼干", 4.00, "图片名字路径"),
    new ProductItem("韩国宾格瑞牛奶", 6.00, "图片名字路径"),
    new ProductItem("卡士椰果粒鲜...", 6.00, "图片名字路径"),
    new ProductItem("得宝迷你纸巾", 26.66, "图片名字路径"),
    new ProductItem("太平梳打饼干", 4.00, "图片名字路径"),
    new ProductItem("太平梳打饼干", 4.00, "图片名字路径"),
    new ProductItem("韩国宾格瑞牛奶", 6.00, "图片名字路径"),
    new ProductItem("卡士椰果粒鲜...", 6.00, "图片名字路径"),
    new ProductItem("得宝迷你纸巾", 26.66, "图片名字路径"),
    new ProductItem("太平梳打饼干", 4.00, "图片名字路径"),



  ]
  // 模拟产品scroll数据
  // 饮品
  productList3: ProductItem[] = [
    new ProductItem("太平梳打饼干", 4.00, "图片名字路径"),
    new ProductItem("韩国宾格瑞牛奶", 6.00, "图片名字路径"),
    new ProductItem("卡士椰果粒鲜...", 6.00, "图片名字路径"),
    new ProductItem("得宝迷你纸巾", 26.66, "图片名字路径"),
    new ProductItem("太平梳打饼干", 4.00, "图片名字路径"),
    new ProductItem("太平梳打饼干", 4.00, "图片名字路径"),
    new ProductItem("韩国宾格瑞牛奶", 6.00, "图片名字路径"),
    new ProductItem("卡士椰果粒鲜...", 6.00, "图片名字路径"),
    new ProductItem("得宝迷你纸巾", 26.66, "图片名字路径"),
    new ProductItem("太平梳打饼干", 4.00, "图片名字路径"),

  ]




  constructor(
    // private elementRef: ElementRef

  ) {

    // console.log(window);
  }

  // 初始化完组件视图及其子视图之后调用。
  // sumItem是总共有多少个li标签,从service中获得.默认值是10个产品


  ngAfterViewInit(sumItem: number = 10): void {

  }











  //   // 取li的宽度,然后乘以数量(),数量从service中获取
  //   // let liSroll = this.elementRef.nativeElement.querySelector('.product-item-scroll-x');
  //   let allLiScroll = [].slice.call(document.querySelectorAll('.product-item-scroll-x'));

  //   console.log(allLiScroll[0].style.width);
  //   // 获得li的宽度,
  //   // let liWidth = liSroll.target
  //   // console.log(liWidth);
  //   // 获得li的margin-left的值并加一个像素

  //   //  all liWidth*sumItem;

  //   // 取到ul,设置ul的宽度,
  //   console.log(66666666);
  //   //  
  //   leftScroll: Subscription = null;
  //   rightScroll: Subscription = null;

  //   this.leftScroll = Observable.fromEvent(this.leftDiv, 'scroll')
  //     .distinctUntilChanged()
  //     .debounceTime(500)
  //     .subscribe((event: Event) => {
  //       this.handleScroll(this.leftDiv);
  //     });
  //   this.rightScroll = Observable.fromEvent(this.rightDiv, 'scroll')
  //     .distinctUntilChanged()
  //     .debounceTime(500)
  //     .subscribe((event: Event) => {
  //       this.handleScroll(this.rightDiv);
  //     });
  //   //      
  //   //       console.dir(divEle);
  //   //      
  //   //       let div = doxcument.getElementById("div");  //获取id为‘div'的节点

  // }

  // // 事件
  // // 当手指滑动ul的时候,根据滑动的方向,进行改变ul的left值,

  // showEvent($event) {
  //   console.log($event);
  // }

  // productScrollX() {

  // }


}
// 产品scroll类型
export class ProductItem {
  constructor(

    public title: string,
    public price: number,
    public imgSrc: string
  ) { }
}