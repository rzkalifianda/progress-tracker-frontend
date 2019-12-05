import { Component, OnInit,Input,Output } from '@angular/core';
import { TIMELINE } from '../../../constants/index';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResponseObject } from 'src/app/types';
import { MainDashboardService } from 'src/app/pages/admin/main-dashboard/main-dashboard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'page-admin-main-dashboard-time',
  templateUrl: './main-dashboard-time.component.html',
  styleUrls: ['./main-dashboard-time.component.sass']
})
export class MainDashboardTimeComponent implements OnInit {

   timelines = TIMELINE;
   objectCard: any;
   dataRoles: any;
   dataProject: any;
   dataName: any;
   MainDashboardCategory: any;
   SelectedID: any;
   showNameProject = false;
   showNameRoles = false;
   showEmptyData = false;

 onClick(){
    console.log("Card id Clicked!");
 }

  constructor(
   private httpClient: HttpClient,
   private mainDashboardService: MainDashboardService,
   private router: Router,
  ) { }

  ngOnInit() {
  if ( this.mainDashboardService.selectedID === '') {
    alert('No ID chosen, please chose the data first');
    this.router.navigateByUrl('home-admin');
  }
  this.MainDashboardCategory = this.mainDashboardService.selectedMainDashboardCategory;
  this.SelectedID = this.mainDashboardService.selectedID;
  const token = localStorage.getItem('userToken');
  const headers = new HttpHeaders()
           .set('authorization', token);
  this.httpClient.get('https://nameless-cove-75161.herokuapp.com/api/page/admin/timeline?filterBy=' + this.MainDashboardCategory + '&id=' + this.SelectedID,
   {
     headers
   })
   .subscribe(
     (response: ResponseObject)  => {
       this.objectCard =  response.data;
       this.dataRoles = response.data.rolename;
       this.dataProject = response.data.projectname;
       this.dataName = this.mainDashboardService.selectedName;
       console.log(response.data.length);
       if (response.data.length === 0) {
        this.showEmptyData = true;
        console.log('harusnya keluar');
       }
       if (this.MainDashboardCategory === 'projects') {
        this.showNameProject = true;
        this.showNameRoles = false;
      } else if (this.MainDashboardCategory === 'roles') {
          this.showNameProject = false;
          this.showNameRoles = true;
      }
     },
   error  => {
     console.log(error);
   }
   );
   }

}
