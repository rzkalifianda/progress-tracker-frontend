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
    console.log(this.selectedData);
  }
}
