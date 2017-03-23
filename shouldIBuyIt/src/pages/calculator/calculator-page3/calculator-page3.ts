import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalculatorPage2, CalculatorPage4 } from '../../pages';

/*
  Generated class for the CalculatorPage3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'calculator-page3',
  templateUrl: 'calculator-page3.html'
})
export class CalculatorPage3 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  pushPage = CalculatorPage4;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage3Page');
  }

}
