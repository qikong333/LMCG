import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { KindPage } from '../kind/kind';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'OrderSubmissionPage';
  tab2Root = 'CarListPage';
  tab3Root = KindPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
