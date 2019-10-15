import { AppService } from './../../app.service';
;import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface myinterface {

}

@Component({
  selector: 'card-add-report-dropdown',
  templateUrl: './card-add-report-dropdown.component.html',
  styleUrls: ['./card-add-report-dropdown.component.sass']
})
export class CardAddReportDropdownComponent implements OnInit {
  public index: number;
  public selfRef: CardAddReportDropdownComponent;

  public compInteraction: myinterface;

  @Input() dataProjectsName;
  @Input() dataRolesName;

  @Output() dataProjectNameFinal;
  @Output() dataRolesFinal;

  projectName = '';
  rolesName = '';

  projects = [];
  roles = [];

  constructor(
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnChanges(){
    this.dataProjectNameFinal = this.dataProjectsName;
    this.dataRolesFinal = this.dataRolesName;
    if (this.projects.length !== 0 && this.roles.length !== 0) {
      this.dataProjectNameFinal = this.projects;
      this.dataRolesFinal = this.roles;
    }
  }

  ngOnInit() {
  }
}
