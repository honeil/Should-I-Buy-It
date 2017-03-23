import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalculatorPage1, CalculatorPage3 } from '../../pages';


@Component({
  selector: 'calculator-page2',
  templateUrl: 'calculator-page2.html'
})
export class CalculatorPage2 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  pushPage = CalculatorPage3;
  popPage = CalculatorPage1;
  
  public data: any = {hasMortgage : true};

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage2Page');
  }



}
