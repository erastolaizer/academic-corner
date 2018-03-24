import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AskPage } from '../ask/ask';
import { Storage } from '@ionic/storage';
import { AnswearPage } from '../answear/answear';
@IonicPage()
@Component({
  selector: 'page-discussion',
  templateUrl: 'discussion.html',
})
export class DiscussionPage {
public questions:any = [];
public loguser :any = [];

  constructor(public store:Storage, public menu:MenuController, public navCtrl: NavController, public http:Http, public navParams: NavParams,public toastCtrl:ToastController) {
  }

  ionViewDidEnter() {
    this.store.get('user').then((val) => {
          this.loguser = val.user;
        });
       }
  ionViewWillEnter() {

         let headers   : any      = new Headers({ 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"}),
             options   : any     = new RequestOptions({ headers: headers }),
             url       : any      = 'http://192.168.43.224:8000/api/getqns';
           this.http.get(url,options).map(res => res.json())
             .subscribe(
               data => {
                 console.log(data);
                   this.questions= data.questions;
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
ask(){
  this.navCtrl.push(AskPage);
}
viewAnswears(id,tag,qns,name){
  this.navCtrl.push(AnswearPage,{id:id,tag:tag,qns:qns,name:name});
}
}
