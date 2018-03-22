import { Component } from '@angular/core';


/**
 * Generated class for the ProductHalfTypeHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-half-type-home',
  templateUrl: 'product-half-type-home.html'
})
export class ProductHalfTypeHomeComponent {

  text: string;

  constructor() {
    console.log('Hello ProductHalfTypeHomeComponent Component');
    this.text = 'Hello World';
  }

}
