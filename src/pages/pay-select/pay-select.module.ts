import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaySelectPage } from './pay-select';

@NgModule({
  declarations: [
    PaySelectPage,
  ],
  imports: [
    IonicPageModule.forChild(PaySelectPage),
  ],
})
export class PaySelectPageModule {}
