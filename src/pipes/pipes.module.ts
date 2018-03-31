import { NgModule } from '@angular/core';
import { StringPiPipe } from './string-pi/string-pi';
import { OrderByPipe } from './order-by/order-by';
@NgModule({
	declarations: [StringPiPipe,
    OrderByPipe],
	imports: [],
	exports: [StringPiPipe,
    OrderByPipe]
})
export class PipesModule {}
