import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from '../first/first';
import { VijayPage } from '../vijay/vijay';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  TENALI(){
    this.navCtrl.push(FirstPage);
}
VIJAYAWADA(){
  this.navCtrl.push(VijayPage);
}
}