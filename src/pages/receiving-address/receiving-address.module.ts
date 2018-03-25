import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceivingAddressPage } from './receiving-address';

@NgModule({
  declarations: [
    ReceivingAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceivingAddressPage),
  ],
})
export class ReceivingAddressPageModule {}
