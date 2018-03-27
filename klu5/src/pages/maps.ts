import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform} from 'ionic-angular';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  coords:any;
  location:any;
  firebase:any;
  constructor(public navCtrl: NavController, private geolocation: Geolocation,public navParams: NavParams,public platform:Platform) {
  }
   options={
     colorl:'#ASDF96',
     fontfamilyl:'',
     fontsizel:'14px',
     fontweightl:'bold',
     textl:'B',
    }
  

        
  mapUser(): void
  {
    this.platform.ready().then(()=>{
      let options={timeout:3000,enableHighAccuracy:true,maximumAge:0}
  this.geolocation.getCurrentPosition(options).then((location) => {
    console.log('Fetched the location successfully',location);
    this.location=location;
  }).catch((error) => {
    console.log('Error getting location', error);
  });
  });
  //let latitude : number=this.location.coords.latitude,
  //longitude : number=this.location.coords.longitude;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
  }

}
