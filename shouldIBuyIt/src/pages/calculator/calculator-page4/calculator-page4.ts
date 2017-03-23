import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'calculator-page4',
  templateUrl: 'calculator-page4.html'
})
export class CalculatorPage4 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage4Page');
  }

}
