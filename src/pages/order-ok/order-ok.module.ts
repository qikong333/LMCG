import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderOkPage } from './order-ok';

@NgModule({
  declarations: [
    OrderOkPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderOkPage),
  ],
})
export class OrderOkPageModule {}
