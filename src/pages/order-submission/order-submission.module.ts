import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderSubmissionPage } from './order-submission';

@NgModule({
  declarations: [
    OrderSubmissionPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderSubmissionPage),
  ],
})
export class OrderSubmissionPageModule {}
