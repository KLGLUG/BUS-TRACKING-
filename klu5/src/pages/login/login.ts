import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { FirstPage } from '../first/first';
import { VijayPage } from '../vijay/vijay';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  TENALI(){
    this.navCtrl.setRoot(FirstPage);
  }
  VIJAYAWADA(){
    this.navCtrl.setRoot(VijayPage);
  }
  
  ionViewDidLoad() {
   
    console.log('ionViewDidLoad SplashPage');
  }

}
