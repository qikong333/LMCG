import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController } from "ionic-angular";


 
@Component({
  selector: 'input-title-search',
  templateUrl: 'input-title-search.html'
})
export class InputTitleSearchComponent {


  constructor(private navController:NavController) {

  }
 

  @ViewChild("searchInput") searchInput:ElementRef;

  @ViewChild("defaultText") defaultText:ElementRef;
  searchString:string = "后台的1111111111数";
  
  clear(){
    console.log(this.searchString);
   this.defaultText.nativeElement.innerHTML ="";
  }
  defaultInput(){
    this.defaultText.nativeElement.innerHTML =this.searchString;
  }
  cancelText(){

      this.navController.pop();
  }
  
 
}
