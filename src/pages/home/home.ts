import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { PrimaryPage } from '../primary/primary';
import { AdvancePage } from '../advance/advance';
import { OrdinaryPage } from '../ordinary/ordinary';
import { CollegePage } from '../college/college';
import { ForumPage } from '../forum/forum';
import { NurseryPage } from '../nursery/nursery';
import { ResearchPage } from '../research/research';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public news :any = [];
  constructor(public http:Http, public navCtrl: NavController,public toastCtrl:ToastController) {

  }
  ionViewWillEnter() {
    let headers   : any      = new Headers({ 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"}),
       options   : any     = new RequestOptions({ headers: headers }),
       url= 'http://192.168.43.224:8000/api/news';
       this.http.get(url,options).map(res => res.json ())
       .subscribe(
          data => {
         console.log(data);
         this.news = data.news;
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

  primary(){
    this.navCtrl.push(PrimaryPage);
  }
  Ordinary(){
    this.navCtrl.push(OrdinaryPage);
  }
  Advance(){
    this.navCtrl.push(AdvancePage);
  }
  college(){
    this.navCtrl.push(CollegePage);
  }
  nursery(){
    this.navCtrl.push(NurseryPage);
  }
  forum(){
    this.navCtrl.push(ForumPage);
  }
  research(){
    this.navCtrl.push(ResearchPage);
  }
}
