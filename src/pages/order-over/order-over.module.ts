import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderOverPage } from './order-over';

@NgModule({
  declarations: [
    OrderOverPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderOverPage),
  ],
})
export class OrderOverPageModule {}
