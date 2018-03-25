import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreDetailsPage } from './store-details';

@NgModule({
  declarations: [
    StoreDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreDetailsPage),
  ],
})
export class StoreDetailsPageModule {}
