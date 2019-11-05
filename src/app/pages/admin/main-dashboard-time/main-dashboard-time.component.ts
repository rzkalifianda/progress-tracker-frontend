import { Component, OnInit,Input,Output } from '@angular/core';
import { TIMELINE } from '../../../constants/index';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResponseObject } from 'src/app/types';
@Component({
  selector: 'page-admin-main-dashboard-time',
  templateUrl: './main-dashboard-time.component.html',
  styleUrls: ['./main-dashboard-time.component.sass']
})
export class MainDashboardTimeComponent implements OnInit {

   timelines = TIMELINE;
   objectCard: any;
   dataRoles: any;


 onClick(){
    console.log("Card id Clicked!");
 }

  constructor(
   private httpClient:HttpClient,
  ) { }

  ngOnInit() {
   const token = localStorage.getItem('userToken');
   const headers = new HttpHeaders()
           .set('authorization', token);
   console.log(headers)
    this.httpClient.get('https://nameless-cove-75161.herokuapp.com/api/page/admin/timeline?filterBy=projects&id=123',
   {
     headers
   })
   .subscribe(
     (response: ResponseObject)  => {
       console.log(response);
       this.objectCard =  response.data;
       this.dataRoles = response.data.rolename;
       console.log(this.objectCard);
       console.log(this.dataRoles);
     },
   error  => {
     console.log(error);
   }
   );
   }

}
