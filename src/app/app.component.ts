import { Component, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE} from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})

export class AppComponent {

  @Output() dummyCardReportTask = [
    {
      projectName : 'Dinas Kesehatan',
      role : 'UI/UX Designer',
      workTotal : '4'
    },
    {
      projectName : 'Macroad Design System',
      role : 'UI/UX Designer',
      workTotal : '193'
    }
  ];

  @Output() dummyProjectName = [
    {
      dataDropdown : 'Dinas Kesehatan',
    },
    {
      dataDropdown : 'MacroAd',
    }
  ]

  @Output() dummyRoles = [
    {
      dataDropdown : 'Back End Engineer',
    },
    {
      dataDropdown : 'Front End Engineer',
    },
    {
      dataDropdown : 'Project Manager',
    },
    {
      dataDropdown : 'QA Analyst',
    },
    {
      dataDropdown : 'UI / UX Designer',
    }
  ]

  date = new FormControl(moment());
  month: string[]

  ngOnInit() {
  }
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
