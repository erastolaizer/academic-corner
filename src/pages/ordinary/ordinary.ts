import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { SubjectPage } from '../subject/subject';
import { ExamsPage } from '../exams/exams';


@IonicPage()
@Component({
  selector: 'page-ordinary',
  templateUrl: 'ordinary.html',
})
export class OrdinaryPage {
  public sub1: any = []; public sub2: any = []; public sub3: any = []; public sub4: any = [];

    constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public toastCtrl:ToastController) {
    }

    ionViewWillEnter() {

            let headers   : any      = new Headers({ 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"}),
               options   : any     = new RequestOptions({ headers: headers }),
               url       : any      = 'http://192.168.43.224:8000/api/primary_subjects';

             this.http.get(url,options).map(res => res.json())
               .subscribe(
                 data => {
                     this.sub1= data.form1;
                     this.sub2= data.form2;
                     this.sub3= data.form3;
                     this.sub4= data.form4;
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
          subjects(sub_id,sub_name,class_name){
            if (class_name=="Form 2" || class_name=="Form 4") {
              this.navCtrl.push(ExamsPage,{sub_id:sub_id,sub_name:sub_name,class_name:class_name});
            }
            else{
            this.navCtrl.push(SubjectPage,{sub_id:sub_id,sub_name:sub_name,class_name:class_name});
          }
        }

}
