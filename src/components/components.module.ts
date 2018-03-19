import { NgModule } from '@angular/core';
import { IonMeterComponent } from './ion-meter/ion-meter';
import { IonicModule } from 'ionic-angular/module';
import { ShopCarComponent } from './shop-car/shop-car';
import { NumberItemComponent } from './number-item/number-item';
@NgModule({
	declarations: [IonMeterComponent,
    ShopCarComponent,
    NumberItemComponent],
	imports: [IonicModule],
	exports: [IonMeterComponent,
    ShopCarComponent,
    NumberItemComponent]
})
export class ComponentsModule {}
