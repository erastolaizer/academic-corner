import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { CombinationPage } from '../pages/combination/combination';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PrimaryPage } from '../pages/primary/primary';
import { SubjectPage } from '../pages/subject/subject';
import { AdvancePage } from '../pages/advance/advance';
import { AboutPage } from '../pages/about/about';
import { OrdinaryPage } from '../pages/ordinary/ordinary';
import { ReviewPage } from '../pages/review/review';
import { CollMaterialPage } from '../pages/coll-material/coll-material';
import { RegisterPage } from '../pages/register/register';
import { CollegePage } from '../pages/college/college';
import { DocumentPage } from '../pages/document/document';
import { ForumPage } from '../pages/forum/forum';
import { NurseryPage } from '../pages/nursery/nursery';
import { UploadPage } from '../pages/upload/upload';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AnswearPage } from '../pages/answear/answear';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ExamsPage } from '../pages/exams/exams';
import { ForgetpassPage } from '../pages/forgetpass/forgetpass';
import { ContactsPage } from '../pages/contacts/contacts';
import { MissionPage } from '../pages/mission/mission';
import { AcknowledgePage } from '../pages/acknowledge/acknowledge';
import { ResearchPage } from '../pages/research/research';
import { DiscussionPage } from '../pages/discussion/discussion';
import { IonicStorageModule } from '@ionic/storage';
import { AskPage } from '../pages/ask/ask';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CollegePage,
    PrimaryPage,
    AskPage,
    SubjectPage,
    AcknowledgePage,
    UploadPage,
    AnswearPage,
    DiscussionPage,
    MissionPage,
    ExamsPage,
    CollMaterialPage,
    ReviewPage,
    ForgetpassPage,
    CombinationPage,
    AboutPage,
    AdvancePage,
    DocumentPage,
    NurseryPage,
    RegisterPage,
    ForumPage,
    OrdinaryPage,
    ContactsPage,
    ResearchPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MissionPage,
    CollegePage,
    PrimaryPage,
    CollMaterialPage,
    SubjectPage,
    AcknowledgePage,
    UploadPage,
    AboutPage,
    AnswearPage,
    AskPage,
    ReviewPage,
    DiscussionPage,
    RegisterPage,
    ExamsPage,
    ResearchPage,
    NurseryPage,
    ForumPage,
    ContactsPage,
    AdvancePage,
    OrdinaryPage,
    DocumentPage,
    ForgetpassPage,
    CombinationPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
