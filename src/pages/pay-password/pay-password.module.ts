import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayPasswordPage } from './pay-password';

@NgModule({
  declarations: [
    PayPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(PayPasswordPage),
  ],
})
export class PayPasswordPageModule {}
