import { Component } from '@angular/core';

/**
 * Generated class for the HotKeywordsSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hot-keywords-search',
  templateUrl: 'hot-keywords-search.html'
})
export class HotKeywordsSearchComponent {

  text: string;

  constructor() {
    console.log('Hello HotKeywordsSearchComponent Component');
    this.text = 'Hello World';
  }

}
