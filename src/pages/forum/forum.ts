import { Component } from '@angular/core';
import { IonicPage,NavController, LoadingController, ToastController,NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';
import { DiscussionPage } from '../discussion/discussion';
import { ForgetpassPage } from '../forgetpass/forgetpass';

@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {
  public login : FormGroup;
  public loading: any= [];

  constructor(public store:Storage, public http : Http,public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.login = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  }
  logForm()
      {
         let
             username    : string    = this.login.controls["username"].value,
             password     : string    = this.login.controls["password"].value;

             this.showLoader();
               let     headers  : any      = new Headers({ 'X-Requested-With': 'XMLHttpRequest'}),
                       options  : any      = new RequestOptions({ headers: headers }),
                       url      : any       = 'http://192.168.43.224:8000/api/user/login',
                       body    : any        = {username:username,password:password};

                       this.http.post(url,body,options).map(res =>res.json())
                       .subscribe(
                        data =>  {
                          this.store.set('user',data);
                          this.sendNotification("You are successfully login");
                          this.navCtrl.setRoot(DiscussionPage);
                        },

                      error => {
                        if (error.status === 401){
                       this.sendNotification("Wrong Email or Password");
                        }
                        else if(error.status === 0){
                       this.sendNotification("Please check your internet connections!!");
                        }

                      });
                         this.loading.dismiss();

           }

register(){
  this.navCtrl.push(RegisterPage);
}
forgetPass(){
  this.navCtrl.push(ForgetpassPage)
}
showLoader(){
       this.loading = this.loadingCtrl.create({
           content: 'Login in...'
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
