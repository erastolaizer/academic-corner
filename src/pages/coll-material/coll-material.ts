import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { DocumentPage } from '../document/document';

@IonicPage()
@Component({
  selector: 'page-coll-material',
  templateUrl: 'coll-material.html',
})
export class CollMaterialPage {
  public materials:any=[];
  public college_name : any = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
      this.college_name = this.navParams.get('college_name');
    }
    ionViewWillEnter() {

           let headers   : any      = new Headers({ 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"}),
               options   : any     = new RequestOptions({ headers: headers }),
               url       : any      = 'http://192.168.43.224:8000/api/college_material/'+ this.college_name;

             this.http.get(url,options).map(res => res.json())
               .subscribe(
                 data => {
                     this.materials= data.college_material;
                     console.log(this.materials);
               });
          }
          seepdf(Docname, class_id){
             this.navCtrl.push(DocumentPage,{Docname:Docname,class_id:class_id});
          }
}
