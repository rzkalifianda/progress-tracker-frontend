import { Component,Input, OnInit, ViewEncapsulation } from '@angular/core';
declare var angular: any;

@Component({
  selector: 'core-ui-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class DropdownComponent implements OnInit {
  @Input() data: any[];
  constructor() { }

  ngOnInit() {
  }

}
