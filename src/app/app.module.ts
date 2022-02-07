import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { AvatarModule } from 'ngx-avatar';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { CompanyCardComponent } from './company-card/company-card.component';
import { CreateOfficeComponent } from './create-office/create-office.component';
import { EditOfficeComponent } from './edit-office/edit-office.component';
import {
  CompaniesService,
  EmptyContentModule,
  FilterStaffPipe,
  SkeletonListModule,
  StaffService,
} from './shared';
import { AddStaffMemberComponent } from './view-office/add-staff-member/add-staff-member.component';
import { StaffListComponent } from './view-office/staff-list/staff-list.component';
import { ViewOfficeComponent } from './view-office/view-office.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateOfficeComponent,
    ViewOfficeComponent,
    CompanyCardComponent,
    EditOfficeComponent,
    StaffListComponent,
    AddStaffMemberComponent,
    FilterStaffPipe,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    AvatarModule,
    FlexLayoutModule,
    IonicModule.forRoot(),
    FormsModule,
    SkeletonListModule,
    EmptyContentModule,
  ],
  providers: [CompaniesService, StaffService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
