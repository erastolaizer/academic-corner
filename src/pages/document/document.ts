import { Component } from '@angular/core';
import { IonicPage, ViewController,NavController, LoadingController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-document',
  templateUrl: 'document.html',
})
export class DocumentPage {
  public source : string = '';
  public docName : string = '';
  public class_id : string = '';
  public loading : any = [];

  constructor(public loadingCtrl:LoadingController, public view:ViewController,public navCtrl: NavController, public navP: NavParams) {
    this.docName = this.navP.get('Docname');
    this.class_id = this.navP.get('class_id');
  }

  ionViewWillEnter() {
    console.log(this.class_id);
    this.showLoader();
    this.source ='http://192.168.43.224:8000/storage/upload/'+ this.class_id + '/'+ this.docName;
    this.loading.dismiss();
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'opening '+" " + this.docName + '...'
    });

    this.loading.present();
  }
  closeDoc(){
    this.view.dismiss();
  }
}
