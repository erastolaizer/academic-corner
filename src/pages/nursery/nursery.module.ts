import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NurseryPage } from './nursery';

@NgModule({
  declarations: [
    NurseryPage,
  ],
  imports: [
    IonicPageModule.forChild(NurseryPage),
  ],
})
export class NurseryPageModule {}
