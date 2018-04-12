import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchDetailPage } from './search-detail';

@NgModule({
  declarations: [
    SearchDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchDetailPage),ComponentsModule
  ],
})
export class SearchDetailPageModule {}
