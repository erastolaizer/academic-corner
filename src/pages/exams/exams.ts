import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { DocumentPage } from '../document/document';

@IonicPage()
@Component({
  selector: 'page-exams',
  templateUrl: 'exams.html',
})
export class ExamsPage {
public sub_id :any =[];
public sub_name :any =[];
public class_name :any =[];
public title:string;
public pdfs :any =[];
public materials :any =[];

  constructor(public http:Http,public popover:ModalController, public navCtrl: NavController, public navP: NavParams) {
    this.sub_id = this.navP.get('sub_id');
    this.sub_name = this.navP.get('sub_name');
    this.class_name = this.navP.get('class_name');

  }

  ionViewWillEnter() {
          this.title = this.sub_name + " "+ this.class_name ;
          this.GetMaterial(this.sub_id);
     }

        GetMaterial(sub_id){
          let headers   : any      = new Headers({ 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"}),
              options   : any     = new RequestOptions({ headers: headers }),
              url       : any      = 'http://192.168.43.224:8000/api/necta/' + this.sub_id;

                       this.http.get(url,options).map(res => res.json())
                         .subscribe(
                           data => {
                               this.pdfs= data ;
                               console.log(data);
                         });
        }
        onChange(CValue){
          console.log(CValue);
        if(CValue==="notes"){
          this.materials = this.pdfs.notes;
          console.log(this.materials);
        }
        else if(CValue==="exams"){
          this.materials = this.pdfs.exams ;
        }
        else if(CValue==="necta"){
          this.materials = this.pdfs.necta ;
        }
      }

      seepdf(Docname, class_id){
         this.navCtrl.push(DocumentPage,{Docname:Docname,class_id:class_id});
      }
}
