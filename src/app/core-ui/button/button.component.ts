import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'core-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {

  @Input() text = 'Custom Button';
  @Input() classtouse = '';
  private totalClicks: number = 0;

  constructor() { }

  ngOnInit() {
  }


}