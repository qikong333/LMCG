import { Component, Input } from '@angular/core';

 
@Component({
  selector: 'prod-list',
  templateUrl: 'prod-list.html'
})
export class ProdListComponent {

  // 导入的数据
  @Input('datas') datas;

  
  text: string;

  constructor() {
    console.log('Hello ProdListComponent Component');
    this.text = 'Hello World';
  }

}
