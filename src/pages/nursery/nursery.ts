import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { DocumentPage } from '../document/document';

@IonicPage()
@Component({
  selector: 'page-nursery',
  templateUrl: 'nursery.html',
})
export class NurseryPage {
public videos:any = [];
public materials:any =[];
public nursery:any =[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public toastCtrl:ToastController) {
  }

  ionViewWillEnter() {
    let headers   : any      = new Headers({ 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"}),
       options   : any     = new RequestOptions({ headers: headers }),
       url= 'http://192.168.43.224:8000/api/nursery_videos',
       url1 = 'http://192.168.43.224:8000/api/nursery_material';

Observable.forkJoin(
       this.http.get(url,options).map(res => res.json ()),
       this.http.get(url1,options).map(res => res.json ())
     ).subscribe(
          data => {
         this.videos = data[0].nursery_videos;
         this.nursery = data[1];
       },
       error => {
         console.log(error);
         if (error.status === 0){
        this.sendNotification("Please check your internet connections!!");
         }
         else {
           this.sendNotification('Server is temporary not responding!!') ;
         }
       });
}
sendNotification(message)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 5000
      });
      notification.present();
   }
onChange(CValue){

if(CValue==="number"){
this.materials = this.nursery.numbers;
}
else if(CValue==="alpha"){
this.materials = this.nursery.alphabet;
}

}
seepdf(Docname, class_id){
   this.navCtrl.push(DocumentPage,{Docname:Docname,class_id:class_id});
}
}
