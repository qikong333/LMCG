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

<<<<<<< HEAD
  tab1Root = HomePage;
  tab2Root = CategrayPage;
  tab3Root = FoundPage;
  tab4Root = MinePage;
  /*
  tab1Root = 'OrderDetailPage';
=======
  tab1Root = 'OrderSubmissionPage';
>>>>>>> b689a858f7b2ff37d6f4a18525d2907c944a043e
  tab2Root = 'CarListPage';
  tab3Root = KindPage;
  tab4Root = ContactPage;
*/
  constructor() {

  }
}
