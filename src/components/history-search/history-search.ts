import { Component } from '@angular/core';

/**
 * Generated class for the HistorySearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'history-search',
  templateUrl: 'history-search.html'
})
export class HistorySearchComponent {

  text: string;

  constructor() {
    console.log('Hello HistorySearchComponent Component');
    this.text = 'Hello World';
  }

}
