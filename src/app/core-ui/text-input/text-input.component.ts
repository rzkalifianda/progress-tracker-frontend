import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'core-ui-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class TextInputComponent implements OnInit {

  @Input() text = '';
  @Input() classtouse = 'x';
  @Input() type = '';

  constructor() { }

  ngOnInit() {

  }
}