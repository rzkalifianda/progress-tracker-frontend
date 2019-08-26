import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'core-ui-text-view',
  template: `
  <p class={{classtouse}}>
    {{text}}
  </p>
  `,
  styles: [`
  .{
    text-align: left;
    font: Regular 16px/32px Source Sans Pro;
    letter-spacing: 0;
    color: #353535;
    opacity: 1;
  }
  .title {
    text-align: left;
    font: Bold 24px/31px Source Sans Pro;
    letter-spacing: 0;
    color: #0871CE;
    opacity: 1;
  }
  .subtitle {
    text-align: left;
    font: Bold 16px/20px Source Sans Pro;
    letter-spacing: 0;
    color: #01B3E3;
    opacity: 1;
  }
  .bold{
    font: Bold 16px/24px Source Sans Pro;
    letter-spacing: 0;
    opacity: 1;
  }
  .grey {
    letter-spacing: 0;
    color: #C7C7C7;
    opacity: 1;
  }
  .blue {
    letter-spacing: 0;
    color: #0871CE;
    opacity: 1;
  }
  .red {
    letter-spacing: 0;
    color: #D54F4F;
    opacity: 1;
  }
  .left {
    text-align: left;
  }
  .center {
    text-align: center;
  }
  .right {
    text-align: right;
  }

  `],
  encapsulation: ViewEncapsulation.Native
})
export class CustomTextViewComponent implements OnInit {

  @Input() text = 'Custom text view';
  @Input() classtouse = 'x';

  constructor() { }

  ngOnInit() {
  }

}
