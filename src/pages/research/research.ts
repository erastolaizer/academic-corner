import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { DocumentPage } from '../document/document';

@IonicPage()
@Component({
  selector: 'page-research',
  templateUrl: 'research.html',
})
export class ResearchPage {
public samples :any = [];
public materials :any = [];

  constructor(public toastCtrl:ToastController, public navCtrl: NavController, public navParams: NavParams, public http:Http) {
  }

  ionViewWillEnter() {
    let headers   : any      = new Headers({ 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"}),
       options   : any     = new RequestOptions({ headers: headers }),
       url= 'http://192.168.43.224:8000/api/research';

       this.http.get(url,options).map(res => res.json ())
      .subscribe(
          data => {
         this.samples = data;
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

if(CValue==="research"){
this.materials = this.samples.research;
}
else if(CValue==="report"){
this.materials = this.samples.report;
}
else if(CValue==="project"){
this.materials = this.samples.project;
}
}
seepdf(Docname, class_id){
   this.navCtrl.push(DocumentPage,{Docname:Docname,class_id:class_id});
}

}
