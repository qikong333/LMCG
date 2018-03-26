import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAddressPage } from './create-address';

@NgModule({
  declarations: [
    CreateAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAddressPage),
  ],
})
export class CreateAddressPageModule {}
