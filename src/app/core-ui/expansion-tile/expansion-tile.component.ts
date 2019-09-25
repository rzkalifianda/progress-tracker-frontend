import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './../../app.service';

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
    private appService: AppService
  ) {}

  ngOnInit() {

    if (this.appService.getSelectedMainDashboardName() === 'User') {
      this.showLihatDetailRole = false;
      this.showProject = false;
      this.showReport = false;
      this.showUser = true;
    }
    if (this.appService.getSelectedMainDashboardName() === 'Project') {
      this.showProject = true;
      this.showReport = false;
      this.showUser = false;
    }
    if (this.appService.getSelectedMainDashboardName() === 'Role') {
      this.showProject = false;
      this.showReport = true;
      this.showUser = false;
    }
  }

}
