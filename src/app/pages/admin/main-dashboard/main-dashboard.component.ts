import { AppService } from './../../../app.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface myinterface {

}

@Component({
  selector: 'page-admin-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.sass']
})
export class MainDashboardComponent implements OnInit {
  public index: number;
  public selfRef: MainDashboardComponent;

  public compInteraction: myinterface;

  @Input() dataMainDashboard = '';

  @Output() dataMainDashboardFinal;

  mainDashboardName = '';

  mainDashboards = [];
  constructor(
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.dataMainDashboardFinal = this.dataMainDashboard;
    if (this.mainDashboards.length != 0){
      this.dataMainDashboardFinal = this.mainDashboards;
    }
  }

}
