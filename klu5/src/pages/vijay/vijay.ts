import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the VijayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vijay',
  templateUrl: 'vijay.html',
})
export class VijayPage {
  coords:any;
  location:any;
latitude:any;
LATITUDE:any;
help:any;
ite:any;
  public items : Array<any> = [];
  constructor(public navCtrl: NavController, private geolocation: Geolocation,public platform:Platform, public http:HttpClient,public navParams: NavParams) {
    
  }
  options={
    colorl:'#ASDF96',
    fontfamilyl:'',
    fontsizel:'14px',
    fontweightl:'bold',
    textl:'B',
   }

ionViewWillEnter() : void
   {
      this.load();
     
   }



  load() : void
  {
    
      let LATITUDE: any
     this.http
     .get('http://192.168.1.1/mani/retrive.php')
     .subscribe((data : any) =>
     {
        console.log(data);
       this.items=data;
      let vamsi=this.items;
        console.log(vamsi.toString() );
     },
     (error : any) =>
     {
        console.dir(error);
     });
  }

  
} 
  


