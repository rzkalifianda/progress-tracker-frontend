import { AppService } from './../../app.service';
import { Component, OnInit, Input, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'card-add-report-detail',
  templateUrl: './card-add-report-detail.component.html',
  styleUrls: ['./card-add-report-detail.component.sass']
})
export class CardAddReportDetailComponent implements OnInit {

  constructor(
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
    private _translateService: AppService,
    ) { }

  addMore = false;
  @Input() projectName = '';
  @Input() rolesName = '';

  ngOnInit() {
    this._translateService.projectName.subscribe(
      () => {
        this.projectName = this.appService.getSelectedProjectName();
      }
    );
    this._translateService.rolesName.subscribe(
      () => {
        this.rolesName = this.appService.getSelectedRolesName();
      }
    );
    this.projectName = this.appService.getSelectedProjectName();
    this.rolesName = this.appService.getSelectedRolesName();
  }

  addMoreClicked(){
    this.addMore = !this.addMore;
  }
}
