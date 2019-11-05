import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './../../app.service';
import { MainDashboardService } from 'src/app/pages/admin/main-dashboard/main-dashboard.service';
import { MainDashboardComponent } from 'src/app/pages/admin/main-dashboard/main-dashboard.component';

@Component({
  selector: 'core-ui-expansion-tile',
  templateUrl: './expansion-tile.component.html',
  styleUrls: ['./expansion-tile.component.sass']
})
export class ExpansionTileComponent implements OnInit {
  showLihatDetailRole = true;
  showProject = true;
  showReport = false;
  showUser = false;

  @Input() text = '';
  constructor(
    private appService: AppService,
    private mainDashboardService: MainDashboardService,
    private mainDashboard: MainDashboardComponent,
  ) {}

  ngOnInit() {
    if (this.mainDashboard.selectedMainDashboardDropdown === 'User') {
      this.showLihatDetailRole = false;
      this.showProject = false;
      this.showReport = false;
      this.showUser = true;
    }
    if (this.mainDashboard.selectedMainDashboardDropdown === 'Project') {
      this.showProject = true;
      this.showReport = false;
      this.showUser = false;
    }
    if (this.mainDashboard.selectedMainDashboardDropdown === 'Role') {
      this.showProject = false;
      this.showReport = true;
      this.showUser = false;
    }
  }

  doDetail() {
    console.log('Lihat Detail ' + this.mainDashboard.theCurrentChosen);
  }
  doEdit() {
    console.log('Edit ' + this.mainDashboard.theCurrentChosen);
  }
  doDelete() {
    console.log('Delete ' + this.mainDashboard.theCurrentChosen);
  }

}
