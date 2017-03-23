import { Component } from '@angular/core';

import { MySearchesPage, CalculatorPage1, MapPage, PhotosPage} from '../pages';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MySearchesPage;
  tab2Root: any = CalculatorPage1;
  tab3Root: any = MapPage;
  tab4Root: any = PhotosPage;

  constructor() {

  }
}