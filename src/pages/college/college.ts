import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { CollMaterialPage } from '../coll-material/coll-material';

@IonicPage()
@Component({
  selector: 'page-college',
  templateUrl: 'college.html',
})
export class CollegePage {
public materials:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
  }
  ionViewWillEnter() {

  /*       let headers   : any      = new Headers({ 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"}),
             options   : any     = new RequestOptions({ headers: headers }),
             url       : any      = 'http://192.168.43.224:8000/api/college_material';

           this.http.get(url,options).map(res => res.json())
             .subscribe(
               data => {
                   this.materials= data.college_material;
             }); */
        }
        college(college_name){
           this.navCtrl.push(CollMaterialPage,{college_name:college_name});
        }
}
