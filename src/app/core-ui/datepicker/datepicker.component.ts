import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, 
  MAT_DATE_FORMATS, 
  MAT_DATE_LOCALE} from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatRippleModule, MatInputModule, MatIconModule } from '@angular/material';

import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MMM/YYYY',
  },
  display: {
    dateInput: 'MMMM',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'core-ui-datepicker',
  template: `
    <mat-form-field color="#0871CE" class="classdatepicker">
	    <input matInput [matDatepicker]="myDatePicker" [formControl]="date" color="#0871CE">
      <mat-datepicker-toggle matSuffix [for]="myDatePicker" color="#0871CE">
      </mat-datepicker-toggle>
      <mat-datepicker #myDatePicker
        startView="multi-year"
        (yearSelected)="chosenYearHandler($event)"
        (monthSelected)="chosenMonthHandler($event, myDatePicker)"
        panelClass="example-month-picker" color="#0871CE">
      </mat-datepicker>
    </mat-form-field>
  `,
  styles: [`
  .classdatepicker {
    text-align: left;
    font: bold 18px/32px Source Sans Pro;
    letter-spacing: 0;
    color: #0871CE;
    opacity: 1;
    }
  `],
  encapsulation: ViewEncapsulation.Native,
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})


export class DatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  month : string[]

  date = new FormControl(moment());

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }
}
