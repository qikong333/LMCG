import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyOrderListPage } from './my-order-list';

@NgModule({
  declarations: [
    MyOrderListPage,
  ],
  imports: [
    IonicPageModule.forChild(MyOrderListPage),
  ],
})
export class MyOrderListPageModule {}
