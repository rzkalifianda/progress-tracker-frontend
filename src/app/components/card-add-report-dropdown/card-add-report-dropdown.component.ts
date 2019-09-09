import { AppService } from './../../app.service';
;import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'card-add-report-dropdown',
  templateUrl: './card-add-report-dropdown.component.html',
  styleUrls: ['./card-add-report-dropdown.component.sass']
})
export class CardAddReportDropdownComponent implements OnInit {

  @Input() dataProjectName = [];
  @Input() dataRoles = [];

  @Output() dataProjectNameFinal = [];
  @Output() dataRolesFinal = [];

  projectName;
  rolesName;

  constructor(
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.dataProjectNameFinal = this.dataProjectName;
    this.dataRolesFinal = this.dataRoles;
  }
}
