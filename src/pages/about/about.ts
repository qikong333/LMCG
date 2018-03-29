import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage({
  name:'AboutPage'
})
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

}
