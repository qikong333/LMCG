import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KindPage } from './kind';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    KindPage,
  ],
  imports: [
    IonicPageModule.forChild(KindPage),
    ComponentsModule,
  ],
})
export class KindPageModule {}
