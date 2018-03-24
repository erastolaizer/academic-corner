import { Component } from '@angular/core';
import {AlertController, NavController,LoadingController,ToastController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';



@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {
  private register : FormGroup;
  public subjects : any = [];
  public loading: any;
  public class_id: any;


  constructor(public alertCtrl: AlertController, public http:Http, public loadingCtrl:LoadingController, public toastCtrl:ToastController, public navCtrl:NavController, private formBuilder: FormBuilder )
   {
    this.register = this.formBuilder.group({
       filename: ['', Validators.required],
        category: ['', Validators.required],
        class_id: ['', Validators.required],
        subject_id: ['', Validators.required],
    });
  }

  ionViewWillEnter(){

    }

    onChange(CValue){
      console.log(CValue);
      this.class_id = CValue;

      let headers   : any      = new Headers({ 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"}),
         options   : any     = new RequestOptions({ headers: headers }),
         url       : any      = 'http://localhost:8000/api/subjects/' + this.class_id ;

       this.http.get(url, options).map(res => res.json())
         .subscribe(
           data => {
               this.subjects = data.subjects;
               console.log(this.subjects);
         });
    }

  regForm()
    {
       let
           category  : string   = this.register.controls["category"].value,
           class_id    : string    = this.register.controls["class_id"].value,
           subject_id : string    = this.register.controls["subject_id"].value;

     this.showLoader();
     this.saveEntry(category,class_id,subject_id);
    }

  saveEntry(category,class_id,subject_id)
     {
      let     headers  : any      = new Headers({ 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"}),
        options  : any      = new RequestOptions({ headers: headers }),
        home     :any   = {"class_id":class_id,"subject_id":subject_id,"category":category},
        url      : any      = 'http://localhost:8000/api/upload' ;
console.log(home);
 this.http.post(url,home,options).map(res => res.json())
 .subscribe((results) =>
 {
 console.log(results);
});
this.loading.dismiss();
     }
     getFile(file){
  /*     file= document.querySelector('#files > input[type="file"]').files[0];
       var reader= new Filereader();
       reader.readAsDataURL(file);
       reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function () {
   console.log('error happens');
 };*/
     }

     showLoader(){
       this.loading = this.loadingCtrl.create({
           content: 'posting...'
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
