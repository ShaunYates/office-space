import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AvatarModule } from 'ngx-avatar';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { CompanyCardComponent } from './company-card/company-card.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { SkeletonListUiModule } from './shared/components';
import { ViewCompanyComponent } from './view-company/view-company.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCompanyComponent,
    ViewCompanyComponent,
    CompanyCardComponent,
    EditCompanyComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    AvatarModule,
    FlexLayoutModule,
    IonicModule,
    SkeletonListUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
