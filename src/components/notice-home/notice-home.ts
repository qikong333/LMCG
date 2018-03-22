import { Component } from '@angular/core';

/**
 * Generated class for the NoticeHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notice-home',
  templateUrl: 'notice-home.html'
})
export class NoticeHomeComponent {

  text: string;

  constructor() {
    console.log('Hello NoticeHomeComponent Component');
    this.text = 'Hello World';
  }

}
