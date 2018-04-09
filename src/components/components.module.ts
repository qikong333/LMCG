import { NgModule } from '@angular/core';
import { HeaderHomeComponent } from './header-home/header-home';
import { NoticeHomeComponent } from './notice-home/notice-home';
import { BannerHomeComponent } from './banner-home/banner-home';
import { ProductHalfTypeHomeComponent } from './product-half-type-home/product-half-type-home';
import { ProductHalfTypeItemHomeComponent } from './product-half-type-item-home/product-half-type-item-home';
import { ProductScrollTypeHomeComponent } from './product-scroll-type-home/product-scroll-type-home';
import { ProductScrollTypeItemHomeComponent } from './product-scroll-type-item-home/product-scroll-type-item-home';
import { CartPayHomeComponent } from './cart-pay-home/cart-pay-home';
import { IonicModule } from 'ionic-angular/module';
import { InputTitleSearchComponent } from './input-title-search/input-title-search';
import { HotKeywordsSearchComponent } from './hot-keywords-search/hot-keywords-search';
import { HistorySearchComponent } from './history-search/history-search';
import { ShopCarComponent } from './shop-car/shop-car';
import { NumberItemComponent } from './number-item/number-item';
import { ProdListComponent } from './prod-list/prod-list';
@NgModule({
	declarations: [HeaderHomeComponent,
    NoticeHomeComponent,
    BannerHomeComponent,
    ProductHalfTypeHomeComponent,
    ProductHalfTypeItemHomeComponent,
    ProductScrollTypeHomeComponent,
    ProductScrollTypeItemHomeComponent,
    CartPayHomeComponent,
    InputTitleSearchComponent,
    HotKeywordsSearchComponent,
    HistorySearchComponent,
      ShopCarComponent,
    NumberItemComponent,
    ProdListComponent],
	imports: [
        IonicModule
    ],
	exports: [HeaderHomeComponent,
    NoticeHomeComponent,
    BannerHomeComponent,
    ProductHalfTypeHomeComponent,
    ProductHalfTypeItemHomeComponent,
    ProductScrollTypeHomeComponent,
    ProductScrollTypeItemHomeComponent,
    CartPayHomeComponent,
    InputTitleSearchComponent,
    HotKeywordsSearchComponent,
    HistorySearchComponent,
    
        ShopCarComponent,
	 NumberItemComponent,
    ProdListComponent
	]
})
export class ComponentsModule {}
