import { AddReportService } from './../../pages/add-report/add-report.service';
import { AppService } from './../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { MainDashboardService } from 'src/app/pages/admin/main-dashboard/main-dashboard.service';
import { MainDashboardComponent } from 'src/app/pages/admin/main-dashboard/main-dashboard.component';
declare var angular: any;

@Component({
  selector: 'core-ui-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class DropdownComponent implements OnInit {
  @Input() data: any;
  @Input() placeholder = '';
  @Input() classtouse = '';

  @Input() function: any;
  @Output() result : any;

  selectedData;

  constructor(
    private addReportService: AddReportService,
    private mainDashboardService: MainDashboardService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
    private mainDashboard: MainDashboardComponent,
    ) { }

  ngOnChanges(){
    this.result = this.data.map((item) =>
    {
      return {
        id: item.id,
        name: item.projectname ? item.projectname : item.rolename,
      }
    })
  }

  ngOnInit() {
  }

  selected() {
    if (this.function === 'selectProjectName') {
      this.addReportService.setSelectedProjectName(this.selectedData);
    } else if (this.function === 'selectRolesName') {
      this.addReportService.setSelectedRolesName(this.selectedData);
    } else if (this.function === 'selectedMainDashboardCategory') {
      this.mainDashboardService.setSelectedMainDashboardCategory(this.selectedData);
      this.mainDashboard.showResult();
    }
  }
}
