import { AppService } from './../../app.service';
import { Component,Input, OnInit, ViewEncapsulation, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  @Output() result : any;

  @Input() function: any;

  selectedData;

  constructor(
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.result = this.data;
    // this.function();
  }

  selected(){
    if(this.function == "selectProjectName")
    {
      this.appService.setSelectedProjectName(this.selectedData);
    }
    else if (this.function == "selectRolesName")
    {
      this.appService.setSelectedRolesName(this.selectedData);
    }
  }
}
