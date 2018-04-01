import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchDetailPage } from './search-detail';

@NgModule({
  declarations: [
    SearchDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchDetailPage),
  ],
})
export class SearchDetailPageModule {}
