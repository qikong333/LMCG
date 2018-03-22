import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
 
import { CategrayPage } from "../categray/categray";
import { FoundPage } from "../found/found";
import { MinePage } from "../mine/mine";

import { KindPage } from '../kind/kind';


@Component({
  selector: 'tabs-page',
  templateUrl: 'tabs.html'

})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategrayPage;
  tab3Root = FoundPage;
  tab4Root = MinePage;
  /*
  tab1Root = 'OrderDetailPage';
  tab2Root = 'CarListPage';
  tab3Root = KindPage;
  tab4Root = ContactPage;
*/
  constructor() {

  }
}
