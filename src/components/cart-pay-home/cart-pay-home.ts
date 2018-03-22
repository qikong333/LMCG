import { Component } from '@angular/core';

/**
 * Generated class for the CartPayHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cart-pay-home',
  templateUrl: 'cart-pay-home.html'
})
export class CartPayHomeComponent {

  text: string;

  constructor() {
    console.log('Hello CartPayHomeComponent Component');
    this.text = 'Hello World';
  }

}
