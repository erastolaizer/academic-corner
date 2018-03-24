import { Component } from '@angular/core';
import { IonicPage,NavController, LoadingController, ToastController,NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-answear',
  templateUrl: 'answear.html',
})
export class AnswearPage {
  public answ : FormGroup;
  public loading: any= [];
  public loguser :any = [];
  public question_id :any = [];
  public question_tag :string;
  public question :string;
  public name :any = [];
  public answears :any = [];


    constructor(public store:Storage, public http : Http,public navCtrl: NavController, public navP: NavParams, private formBuilder: FormBuilder, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.answ = this.formBuilder.group({
    answear: ['', Validators.required],
  });
  this.question_id = this.navP.get('id');
  this.question_tag = this.navP.get('tag');
  this.question = this.navP.get('qns');
  this.name = this.navP.get('name');
  }
  ionViewWillEnter() {
    this.store.get('user').then((val) => {
          this.loguser = val.user;
          this.http.get('http://192.168.43.224:8000/api/getAnsw/'+this.question_id).map(res => res.json())
               .subscribe(
                 data => {
                    console.log(data);
                     this.answears = data.answears;
                 },
                 error => {
                     this.sendNotification('Check your internet connection');
                 });
        });
      }
      answForm(){
        let
            answear     : string    = this.answ.controls["answear"].value;

            this.showLoader();
              let    headers  : any      = new Headers({ 'X-Requested-With': 'XMLHttpRequest'}),
                      options  : any      = new RequestOptions({ headers: headers }),
                      user_name : any = this.loguser.name,
                      question_id = this.question_id,
                      url      : any       = 'http://192.168.43.224:8000/api/answear',
                      body    : any        = {question_id:question_id,answear:answear,user_name:user_name};

                      this.http.post(url,body,options).map(res =>res.json())
                      .subscribe(
                       data =>  {
                         this.sendNotification("You are successfully post your answear");
                       },

                     error => {
                       console.log(error);
                       if (error.status === 0){
                      this.sendNotification("Please check your internet connections!!");
                       }

                     });
                        this.loading.dismiss();


      }
      showLoader(){
             this.loading = this.loadingCtrl.create({
                 content: 'Posting...'
             });

             this.loading.present();
           }

           sendNotification(message)  : void
              {
                 let notification = this.toastCtrl.create({
                     message       : message,
                     duration      : 5000
                 });
                 notification.present();
              }


}
