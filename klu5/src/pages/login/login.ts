import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FirstPage } from '../first/first';
import { VijayPage } from '../vijay/vijay';
import  { MapsPage}  from '../maps/maps';
import { HttpClient } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }
 

  
  VIJAYAWADA(){
    this.navCtrl.push(VijayPage);
  }
  TENALI(){
    this.navCtrl.push(FirstPage);
  }
  
  ionViewDidLoad() {
   
    console.log('ionViewDidLoad SplashPage');
   
  }
  
}
  
