import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { KindPage } from '../kind/kind';
import { SearchPage } from '../search/search';
import { MinePage } from '../mine/mine';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = 'PayPasswordPage';
  tab3Root = 'SearchPage';
  tab4Root = MinePage;

  constructor() {

  }
}
