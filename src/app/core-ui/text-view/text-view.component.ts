import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'core-ui-text-view',
  templateUrl: './text-view.component.html',
  styleUrls: ['./text-view.component.sass'],
  encapsulation: ViewEncapsulation.Native
})

export class TextViewComponent implements OnInit {

  @Input() text = 'Custom text view';
  @Input() classtouse = 'x';

  constructor() { }

  ngOnInit() {
  }

}
