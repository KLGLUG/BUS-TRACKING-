import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform} from 'ionic-angular';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient, HttpHeaders } from '@angular/common/http';



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
  baseURI : string  = "http://localhost/mani/newfile.php";
  coords:any;
  hei:any;
  location:any;
  constructor(public navCtrl: NavController,public http: HttpClient, private geolocation: Geolocation,public navParams: NavParams,public platform:Platform) {
  }
   options={
     colorl:'#ASDF96',
     fontfamilyl:'',
     fontsizel:'14px',
     fontweightl:'bold',
     textl:'B',
    }
     
   

   

  entry(latitude:string,longitude:string)
  {
    let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
    options 	: any		= { "key" : "create", "latitude" :latitude,"longitude" : longitude},
    url       : any      	= this.baseURI;

this.http
.post(url, JSON.stringify(options), headers)
.subscribe((data: any) =>
{
   // If the request was successful notify the user
   console.log(`Congratulations the technology: ${latitude} was successfully updated`);
},
(error : any) =>
{
   console.log({error});
});

  }
  
  mapUser(): void
  {
    this.platform.ready().then(()=>{
      let options={timeout:3000,enableHighAccuracy:true,maximumAge:0}
  this.geolocation.getCurrentPosition(options).then((location) => {
    console.log('Fetched the location successfully',location);
    this.location=location;
    let latitude : string=this.location.coords.latitude,
      longitude : string=this.location.coords.longitude;
      setInterval(()=>{
        this.entry(latitude,longitude);
    }, 5000)
      

  }).catch((error) => {
    console.log('Error getting location', error);
    //let latitude : number=this.location.coords.latitude,
    //longitude : number=this.location.coords.longitude;
    //this.entry(latitude,longitude);
  });
  });
  
    }

 

}
