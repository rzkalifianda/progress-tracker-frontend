import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'core-ui-buttonAdmin',
  templateUrl: './button-admin.component.html',
  styleUrls: ['./button-admin.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonAdminComponent implements OnInit {

  @Input() text = 'Custom Button Admin';
  @Input() classtouse = '';
  @Output() countChanged = new EventEmitter<number>();
  private totalClicks: number = 0;

  constructor() { }

  ngOnInit() {
  }


}