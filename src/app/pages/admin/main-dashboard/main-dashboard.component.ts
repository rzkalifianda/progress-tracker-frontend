import { AppService } from './../../../app.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'page-admin-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.sass']
})
export class MainDashboardComponent implements OnInit {
  showDetailProject = true;
  showDetailUser = false;
  showDetailRole = false;
  public index: number;
  public selfRef: MainDashboardComponent;

  @Input() dataMainDashboard = '';

  @Output() dataMainDashboardFinal;

  mainDashboardName = '';

  mainDashboards = [];
  constructor(
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
    private _translateService: AppService,
  ) { }

  ngOnInit() {
    this.dataMainDashboardFinal = this.dataMainDashboard;
    if (this.mainDashboards.length != 0) {
      this.dataMainDashboardFinal = this.mainDashboards;
    }

    this._translateService.mainDashboardName.subscribe(
      () => {
        if (this.appService.getSelectedMainDashboardName() === 'Project') {
          this.showDetailProject = true;
          this.showDetailRole = false;
          this.showDetailUser = false;
        } else if (this.appService.getSelectedMainDashboardName() === 'Role') {
          this.showDetailRole = true;
          this.showDetailProject = false;
          this.showDetailUser = false;
        } else if (this.appService.getSelectedMainDashboardName() === 'User') {
          this.showDetailUser = true;
          this.showDetailRole = false;
          this.showDetailProject = false;
        }
      }
    );
  }

  onSubmit(searchResult: string) {
    console.log(searchResult);
  }
}
