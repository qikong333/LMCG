import { Component,ViewChild } from '@angular/core';
 
import { Slides } from 'ionic-angular';
/**
 * Generated class for the ProductScrollTypeHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-scroll-type-home',
  templateUrl: 'product-scroll-type-home.html'
})
export class ProductScrollTypeHomeComponent {
  @ViewChild(Slides) slides: Slides;
 
  constructor() {
 
  }

}
