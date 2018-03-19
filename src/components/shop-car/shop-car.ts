import { Component } from '@angular/core';

/**
 * Generated class for the ShopCarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'shop-car',
  templateUrl: 'shop-car.html'
})
export class ShopCarComponent {

  text: string;

  constructor() {
    console.log('Hello ShopCarComponent Component');
    this.text = 'Hello World';
  }

}
