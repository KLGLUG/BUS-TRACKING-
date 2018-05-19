import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { MapsPage}  from '../maps/maps';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import  {TablePage}  from '../table/table';
import {LoginPage} from '../login/login';
/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {
   location :any
   
  constructor(public navCtrl: NavController, public navParams: NavParams) { 
  
  }
  TENALI()
  {
    this.navCtrl.push(MapsPage);
  }
  TEN()
  {
    this.navCtrl.push(LoginPage);
  }
  

}
