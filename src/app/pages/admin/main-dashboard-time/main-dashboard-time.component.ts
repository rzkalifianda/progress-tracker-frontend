import { Component, OnInit,Input,Output } from '@angular/core';
import { TIMELINE } from '../../../constants/index';

@Component({
  selector: 'page-admin-main-dashboard-time',
  templateUrl: './main-dashboard-time.component.html',
  styleUrls: ['./main-dashboard-time.component.sass']
})
export class MainDashboardTimeComponent implements OnInit {

 timelines = TIMELINE;


 onClick(){
    console.log("Card id Clicked!");
 }

  constructor() { }
  ngOnInit() {
   }

}
