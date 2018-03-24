import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CombinationPage } from '../combination/combination';

@IonicPage()
@Component({
  selector: 'page-advance',
  templateUrl: 'advance.html',
})
export class AdvancePage {
  public sub1: any = [];
  public sub2: any = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewWillEnter() {

      /*      let headers   : any      = new Headers({ 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"}),
               options   : any     = new RequestOptions({ headers: headers }),
               url       : any      = 'http://localhost:8000/api/primary_subjects';

             this.http.get(url,options).map(res => res.json())
               .subscribe(
                 data => {
                     this.sub1= data.form5;
                     this.sub2= data.form6;
               });*/
          }

    comb(comb_id){
    this.navCtrl.push(CombinationPage,{comb_id:comb_id});
    }
}
