import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextViewComponent } from './core-ui/text-view/text-view.component';
import { TextInputComponent } from './core-ui/text-input/text-input.component';
import { ButtonComponent } from './core-ui/button/button.component';
import { DatepickerComponent } from './core-ui/datepicker/datepicker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRippleModule, MatInputModule, MatCardModule, MatDividerModule,
  MatExpansionModule, MatSelectModule, MatSidenavModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatIconModule } from '@angular/material/icon';
import { DropdownComponent } from './core-ui/dropdown/dropdown.component';
import { LoginSceneComponent } from './pages/login-scene/login-scene.component';
import { CheckBoxComponent } from './core-ui/check-box/check-box.component';
import { Group1191Component } from './svg/group1191/group1191.component';
import { Group1192Component } from './svg/group1192/group1192.component';
import { UserReportDetailComponent } from './pages/report-detail/report-detail.component';
import { CardReportTitleComponent } from './components/card-report-title/card-report-title.component';
import { AddReportComponent } from './pages/add-report/add-report.component';
import { CardAddReportDropdownComponent } from './components/card-add-report-dropdown/card-add-report-dropdown.component';
import { CardAddReportButtonComponent } from './components/card-add-report-button/card-add-report-button.component';
import { CardAddReportDetailComponent } from './components/card-add-report-detail/card-add-report-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardAddReportTaskComponent } from './components/card-add-report-task/card-add-report-task.component';
import { ExpansionTileComponent } from './core-ui/expansion-tile/expansion-tile.component';
import {MatListModule} from '@angular/material/list';
import { CardComponent } from './components/card/card.component';
import { HomeReportComponent } from './pages/home-report/home-report.component';
import { Group1172Component } from './svg/group1172/group1172.component';
import { AdminReportDetailComponent } from './pages/admin/report-detail/report-detail.component';
import { MainDashboardComponent } from './pages/admin/main-dashboard/main-dashboard.component';
import { MainDashboardTimeComponent } from './pages/admin/main-dashboard-time/main-dashboard-time.component';

@NgModule({
  declarations: [
    AppComponent,
    TextViewComponent,
    TextInputComponent,
    ButtonComponent,
    DatepickerComponent,
    DropdownComponent,
    LoginSceneComponent,
    CheckBoxComponent,
    UserReportDetailComponent,
    CardReportTitleComponent,
    Group1191Component,
    Group1192Component,
    DatepickerComponent,
    AddReportComponent,
    CardAddReportDropdownComponent,
    CardAddReportButtonComponent,
    CardAddReportDetailComponent,
    CardAddReportTaskComponent,
    CardComponent,
    HomeReportComponent,
    ExpansionTileComponent,
    AdminReportDetailComponent,
    Group1172Component,
    MainDashboardComponent,
    MainDashboardTimeComponent
  ],
  exports: [
    // CardAddReportTaskComponent,
  ],
  entryComponents:
  [
    CardAddReportDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRippleModule,
    MatMomentDateModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
