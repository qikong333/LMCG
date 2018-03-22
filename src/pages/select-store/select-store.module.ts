import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectStorePage } from './select-store';

@NgModule({
  declarations: [
    SelectStorePage,
  ],
  imports: [
    IonicPageModule.forChild(SelectStorePage),
  ],
})
export class SelectStorePageModule {}
