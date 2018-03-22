import { Component } from '@angular/core';

/**
 * Generated class for the BannerHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'banner-home',
  templateUrl: 'banner-home.html'
})
export class BannerHomeComponent {

  text: string;

  constructor() {
    console.log('Hello BannerHomeComponent Component');
    this.text = 'Hello World';
  }

}
