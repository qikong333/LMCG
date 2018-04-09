import { Directive, Input, HostBinding, HostListener } from '@angular/core';
/**
 * Generated class for the ImgurlDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[imgurl]' // Attribute selector
})
export class ImgurlDirective {
  @Input() imgurl: string;

  @HostBinding() get innerText() {
    return this.imgurl;
  } 

  constructor() {
    console.log('Hello ImgurlDirective Directive');
  }

}
