import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalculatorPage2, EstMarketPricePage } from '../../pages';
import { ZillowAPI } from '../../../Zillow/zillow';



@Component({
  selector: 'calculator-page1',
  templateUrl: 'calculator-page1.html'
})
export class CalculatorPage1 {
  
  marketPrice: string = "$100,000";
  public testPrice: any;

  zillowData: any = {}
  zestimate: any; 
  pushPage = CalculatorPage2;
  public showEstMarketPriceDefinition: boolean = false;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public zillow: ZillowAPI
              ) {}



  ionViewDidLoad() {
    console.log('initial view invoked');
    this.zillow.getZillowToJSON().then(data => this.testPrice = data);
  }
  
  goToEstMarketPriceDefinition(){
    this.navCtrl.push(EstMarketPricePage);
  }

     
}

 


