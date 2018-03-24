import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubjectPage } from '../subject/subject';
import { ExamsPage } from '../exams/exams';

@IonicPage()
@Component({
  selector: 'page-combination',
  templateUrl: 'combination.html',
})
export class CombinationPage {
public comb_id:any=[];
public title:any=[];
public sub1:any=[];
public sub2:any=[];
public sub3:any=[];
public sub1_id:any=[];
public sub2_id:any=[];
public sub3_id:any=[];
public nameClass:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.comb_id = this.navParams.get('comb_id');
  }

  ionViewWillEnter() {
    console.log(this.comb_id);
    if(this.comb_id === 'PCM5'){
      this.title = "PCM Form 5";
      this.sub1 = "Physics";
      this.sub1_id = "Phyf5";
      this.sub2 = "Chemistry";
      this.sub2_id = "Chemf5";
      this.sub3 = "Mathematics";
      this.sub3_id = "Mathf5";
      this.nameClass = "Form 5" ;
    }
    else if(this.comb_id === "PCB5"){
      this.title = "PCB Form 5";
      this.sub1 = "Physics";
      this.sub1_id = "Phyf5";
      this.sub2 = "Chemistry";
      this.sub2_id = "Chemf5";
      this.sub3 = "Biology";
      this.sub3_id = "Biof5";
      this.nameClass = "Form 5" ;
    }
    else if(this.comb_id === "PGM5"){
      this.title = "PGM Form 5";
      this.sub2 = "Geography";
      this.sub2_id = "Geogf5";
      this.sub1 = "Physics";
      this.sub1_id = "Phyf5";
      this.sub3 = "Mathemtics";
      this.sub3_id = "Mathf5";
      this.nameClass = "Form 5" ;

    }
    else if(this.comb_id === "CBG5"){
        this.title = "CBG Form 5";
            this.sub3 = "Geogrphy";
            this.sub3_id = "Geogf5";
            this.sub1 = "Chemistry";
            this.sub1_id = "Chemf5";
            this.sub2 = "Biology";
            this.sub2_id = "Biof5";
            this.nameClass = "Form 5" ;

      }
    else if(this.comb_id === "ECA5"){
          this.title = "ECA Form 5";
          this.sub1 = "Economics";
          this.sub1_id = "Ecof5";
          this.sub2 = "Commerce";
          this.sub2_id = "Comf5";
          this.sub3 = "Account";
          this.sub3_id = "Accf5";
          this.nameClass = "Form 5" ;
        }
     else if(this.comb_id === "EGM5"){
             this.title = "EGM Form 5";
            this.sub1 = "Economics";
            this.sub1_id = "Ecof5";
            this.sub2 = "Geography";
            this.sub2_id = "Geogf5";
            this.sub3 = "Mathemtics";
            this.sub3_id = "Mathf5";
            this.nameClass = "Form 5" ;
          }
     else if(this.comb_id === "HGE5"){
               this.title = "HGE Form 5";
              this.sub1 = "History";
              this.sub1_id = "Histf5";
              this.sub3 = "Economics";
              this.sub3_id = "Ecof5";
              this.sub2 = "Geography";
              this.sub2_id = "Geogf5";
              this.nameClass = "Form 5" ;
            }
     else if(this.comb_id === "HGL5"){
                 this.title = "HGL Form 5";
                this.sub1 = "History";
                this.sub1_id = "Histf5";
                this.sub3 = "Language";
                this.sub3_id = "Langf5";
                this.sub2 = "Geography";
                this.sub2_id = "Geogf5";
                this.nameClass = "Form 5" ;
              }
     else if(this.comb_id === "HGK5"){
                   this.title = "HGK Form 5";
                  this.sub1 = "History";
                  this.sub1_id = "Histf5";
                  this.sub3 = "Kiswahili";
                  this.sub3_id = "Kiswf5";
                  this.sub2 = "Geography";
                  this.sub2_id = "Geogf5";
                  this.nameClass = "Form 5" ;

                }
     else if(this.comb_id === "HKL5"){
                     this.title = "HKL Form 5";
                    this.sub1 = "History";
                    this.sub1_id = "Histf5";
                    this.sub2 = "Kiswahili";
                    this.sub2_id = "Kiswf5";
                    this.sub3 = "Language";
                    this.sub3_id = "Langf5";
                    this.nameClass = "Form 5" ;

                  }

                  //FORM 6

                  else if(this.comb_id === 'PCM6'){
                    this.nameClass = "Form 6" ;
                    this.title = "PCM Form 6";
                    this.sub1 = "Physics";
                    this.sub1_id = "Phyf6";
                    this.sub2 = "Chemistry";
                    this.sub2_id = "Chemf6";
                    this.sub3 = "Mathematics";
                    this.sub3_id = "Mathf6";
                  }
                  else if(this.comb_id === "PCB6"){
                    this.nameClass = "Form 6" ;
                    this.title = "PCB Form 6";
                    this.sub1 = "Physics";
                    this.sub1_id = "Phyf6";
                    this.sub2 = "Chemistry";
                    this.sub2_id = "Chemf6";
                    this.sub3 = "Biology";
                    this.sub3_id = "Biof6";
                  }
                  else if(this.comb_id === "PGM6"){
                    this.nameClass = "Form 6" ;
                    this.title = "PGM Form 6";
                    this.sub2 = "Geography";
                    this.sub2_id = "Geogf6";
                    this.sub1 = "Physics";
                    this.sub1_id = "Phyf6";
                    this.sub3 = "Mathemtics";
                    this.sub3_id = "Mathf6";
                  }
                  else if(this.comb_id === "CBG6"){
                    this.nameClass = "Form 6" ;
                      this.title = "CBG Form 6";
                          this.sub3 = "Geogrphy";
                          this.sub3_id = "Geogf6";
                          this.sub1 = "Chemistry";
                          this.sub1_id = "Chemf6";
                          this.sub2 = "Biology";
                          this.sub2_id = "Biof6";
                    }
                  else if(this.comb_id === "ECA6"){
                    this.nameClass = "Form 6" ;
                        this.title = "ECA Form 6";
                        this.sub1 = "Economics";
                        this.sub1_id = "Ecof6";
                        this.sub2 = "Commerce";
                        this.sub2_id = "Comf6";
                        this.sub3 = "Account";
                        this.sub3_id = "Accf6";
                      }
                   else if(this.comb_id === "EGM6"){
                     this.nameClass = "Form 6" ;
                          this.title = "EGM Form 6";
                          this.sub1 = "Economics";
                          this.sub1_id = "Ecof6";
                          this.sub2 = "Geography";
                          this.sub2_id = "Geogf6";
                          this.sub3 = "Mathemtics";
                          this.sub3_id = "Mathf6";
                        }
                   else if(this.comb_id === "HGE6"){
                     this.nameClass = "Form 6" ;
                            this.title = "HGE Form 6";
                            this.sub1 = "History";
                            this.sub1_id = "Histf6";
                            this.sub3 = "Economics";
                            this.sub3_id = "Ecof6";
                            this.sub2 = "Geography";
                            this.sub2_id = "Geogf6";
                          }
                   else if(this.comb_id === "HGL6"){
                     this.nameClass = "Form 6" ;
                              this.title = "HGL Form 6";
                              this.sub1 = "History";
                              this.sub1_id = "Histf6";
                              this.sub3 = "Language";
                              this.sub3_id = "Langf6";
                              this.sub2 = "Geography";
                              this.sub2_id = "Geogf6";
                            }
                   else if(this.comb_id === "HGK6"){
                     this.nameClass = "Form 6" ;
                                this.title = "HGK Form 6";
                                this.sub1 = "History";
                                this.sub1_id = "Histf6";
                                this.sub3 = "Kiswahili";
                                this.sub3_id = "Kiswf6";
                                this.sub2 = "Geography";
                                this.sub2_id = "Geogf6";
                              }
                   else if(this.comb_id === "HKL6"){
                    this.nameClass = "Form 6" ;
                                  this.title = "HKL Form 6";
                                  this.sub1 = "History";
                                  this.sub1_id = "Histf6";
                                  this.sub2 = "Kiswahili";
                                  this.sub2_id = "Kiswf6";
                                  this.sub3 = "Language";
                                  this.sub3_id = "Langf6";
                                }
  }
  subjects(sub_id,sub_name,class_name){
   if (class_name==="Form 6") {
     this.navCtrl.push(ExamsPage,{sub_id:sub_id,sub_name:sub_name,class_name:class_name});
    }
  else{
      this.navCtrl.push(SubjectPage,{sub_id:sub_id,sub_name:sub_name,class_name:class_name});
    }
  }
}
