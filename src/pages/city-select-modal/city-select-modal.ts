import { Component } from '@angular/core';
import { IonicPage, ModalController} from 'ionic-angular';

/**
 * Generated class for the CitySelectModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-city-select-modal',
  templateUrl: 'city-select-modal.html',
})
export class CitySelectModalPage {

  constructor(private modalController:ModalController) {
  }
 
}
