import { AppService } from './../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
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
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.result = this.data;

  }

  selected(){
    if(this.function === "selectProjectName")
    {
      this.appService.setSelectedProjectName(this.selectedData);
    }
    else if (this.function === "selectRolesName")
    {
      this.appService.setSelectedRolesName(this.selectedData);
    }else if (this.function === "selectMainDashboardName")
    {
      this.appService.setSelectedMainDashboardName(this.selectedData);
    }
  }
}
