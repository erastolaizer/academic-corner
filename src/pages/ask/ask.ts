import { Component } from '@angular/core';
import { IonicPage,NavController, LoadingController, ToastController,NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html',
})
export class AskPage {
  public ask : FormGroup;
  public loading: any= [];
  public loguser :any = [];
    constructor(public store:Storage, public http : Http,public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.ask = this.formBuilder.group({
    question_tag: ['', Validators.required],
    question: ['', Validators.required],
  });
  }
  ionViewWillEnter() {
    this.store.get('user').then((val) => {
          this.loguser = val.user;
        });
      }
  askForm()
      {
         let
             question_tag    : string    = this.ask.controls["question_tag"].value,
             question     : string    = this.ask.controls["question"].value;

             this.showLoader();
               let    headers  : any      = new Headers({ 'X-Requested-With': 'XMLHttpRequest'}),
                       options  : any      = new RequestOptions({ headers: headers }),
                       user_name : any = this.loguser.name,
                       url      : any       = 'http://192.168.43.224:8000/api/question',
                       body    : any        = {question_tag:question_tag,question:question,user_name:user_name};

                       this.http.post(url,body,options).map(res =>res.json())
                       .subscribe(
                        data =>  {
                          this.sendNotification("You are successfully post your question");
                          this.navCtrl.pop();
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
