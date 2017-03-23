import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IntroPage, MapPage, PhotosPage, CalculatorPage1,
  CalculatorPage2, CalculatorPage3, CalculatorPage4, TabsPage, MySearchesPage } from '../pages/pages';
import { EstMarketPricePage } from '../pages/pages';
import { ZillowAPI } from '../Zillow/zillow';



@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    TabsPage,
    CalculatorPage1,
    CalculatorPage2,
    CalculatorPage3,
    CalculatorPage4,
    EstMarketPricePage,
    MapPage,
    PhotosPage,
    MySearchesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    TabsPage,
    CalculatorPage1,
    CalculatorPage2,
    CalculatorPage3,
    CalculatorPage4,
    EstMarketPricePage,
    MapPage,
    PhotosPage,
    MySearchesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler }, ZillowAPI]
})
export class AppModule {}
