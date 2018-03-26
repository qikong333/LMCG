import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitySelectModalPage } from './city-select-modal';

@NgModule({
  declarations: [
    CitySelectModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CitySelectModalPage),
  ],
})
export class CitySelectModalPageModule {}
