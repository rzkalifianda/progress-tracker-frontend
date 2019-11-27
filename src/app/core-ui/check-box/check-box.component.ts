import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'core-ui-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class CheckBoxComponent implements OnInit {

  opened = false;
  checked = false;
  @Input() text = 'Checkbox';
  @Input() classtouse = 'x';
  progresssize: number = 0;
  updateSetting(event) {
    this.progresssize = event.value;
  }
  constructor() { }

  ngOnInit() {
  }

}