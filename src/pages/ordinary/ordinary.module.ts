import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdinaryPage } from './ordinary';

@NgModule({
  declarations: [
    OrdinaryPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdinaryPage),
  ],
})
export class OrdinaryPageModule {}
