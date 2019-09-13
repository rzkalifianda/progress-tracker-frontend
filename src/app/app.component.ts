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
      user: 'Fian',
      workTotal : '4'
    },
    {
      projectName : 'Macroad Design System',
      role : 'Back-end Engineer',
      user: 'Daniel',
      workTotal : '193'
    },
    {
      projectName : 'Macroad Design System',
      role : 'Front-end Engineer',
      user: 'Karel',
      workTotal : '88'
    },
    {
      projectName : 'Dinas Kesehatan',
      role : 'Project Manager',
      user: 'Febry',
      workTotal : '150'
    },
    {
      projectName : 'Macroad Design System',
      role : 'QA Analyst',
      user: 'Sherly',
      workTotal : '174'
    }
  ];

  @Output() dummyReportDetail = [
    {
      role : 'UI/UX Designer',
      workTotal : '4',
      details: [
        {
          user: 'Fian',
          task: [
             {
                prog: '45', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
             },
             {

                prog: '98', usta: 'MacroAd',
                deta: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
             }
          ]
        },
        {
          user: 'Daniel',
          task: [
             {
                prog: '100', usta: 'Pendidikan Tematik',
                deta: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
             },
             {
                prog: '86', usta: 'MacroAd',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '56', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '29', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             }
          ]
        },
        {
          user: 'Karel',
          task: [
             {
                prog: '95', usta: 'MacroAd',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '85', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '88', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
             }
          ]
        },
        {
          user: 'Febry',
          task: [
             {
                prog: '65', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '75', usta: 'MacroAd',
                deta: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
             },
             {
                prog: '94', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '99', usta: 'MacroAd',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '76', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
             }
          ]
        },
        {
          user: 'Sherly',
          task: [
             {
                prog: '100', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             }
          ]
        }
      ]
    },
    {
      role : 'Back-end Engineer',
      workTotal : '193',
      details: [
        {
          user: 'Fian',
          task: [
             {
                prog: '45', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
             }
          ]
        },
        {
          user: 'Daniel',
          task: [
             {
                prog: '100', usta: 'Pendidikan Tematik',
                deta: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
             },
             {
                prog: '86', usta: 'MacroAd',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '56', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '29', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             }
          ]
        },
        {
          user: 'Karel',
          task: [
             {
                prog: '95', usta: 'MacroAd',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '85', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             }
          ]
        },
        {
          user: 'Febry',
          task: [
             {
                prog: '65', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '75', usta: 'MacroAd',
                deta: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
             },
             {
                prog: '94', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             }
          ]
        },
        {
          user: 'Sherly',
          task: []
        }
      ]
    },
    {
      role : 'Front-end Engineer',
      workTotal : '88',
      details: [
        {
          user: 'Fian',
          task: [
             {
                prog: '45', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
             },
             {

                prog: '98', usta: 'MacroAd',
                deta: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
             }
          ]
        },
        {
          user: 'Daniel',
          task: []
        },
        {
          user: 'Karel',
          task: [
             {
                prog: '95', usta: 'MacroAd',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '85', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '88', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
             }
          ]
        },
        {
          user: 'Febry',
          task: [
             {
                prog: '65', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '75', usta: 'MacroAd',
                deta: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
             },
             {
                prog: '94', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '99', usta: 'MacroAd',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '76', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
             }
          ]
        },
        {
          user: 'Sherly',
          task: [
             {
                prog: '100', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             }
          ]
        }
      ]
    },
    {
      role : 'Project Manager',
      workTotal : '150',
      details: [
        {
          user: 'Fian',
          task: [
             {
                prog: '98', usta: 'MacroAd',
                deta: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
             }
          ]
        },
        {
          user: 'Daniel',
          task: [
             {
                prog: '56', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '29', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             }
          ]
        },
        {
          user: 'Karel',
          task: [
             {
                prog: '88', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
             }
          ]
        },
        {
          user: 'Febry',
          task: [
             {
                prog: '94', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '99', usta: 'MacroAd',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             },
             {
                prog: '76', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
             }
          ]
        },
        {
          user: 'Sherly',
          task: [
             {
                prog: '100', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             }
          ]
        }
      ]
    },
    {
      role : 'QA Analyst',
      workTotal : '174',
      details: [
        {
          user: 'Fian',
          task: []
        },
        {
          user: 'Daniel',
          task: [
             {
                prog: '100', usta: 'Pendidikan Tematik',
                deta: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
             },
             {
                prog: '29', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             }
          ]
        },
        {
          user: 'Karel',
          task: [
             {
                prog: '88', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
             }
          ]
        },
        {
          user: 'Febry',
          task: [
             {
                prog: '75', usta: 'MacroAd',
                deta: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
             },
             {
                prog: '99', usta: 'MacroAd',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             }
          ]
        },
        {
          user: 'Sherly',
          task: [
             {
                prog: '100', usta: 'Desain Dinas Blog Kesehatan',
                deta: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
             }
          ]
        }
      ]
    }
  ];


  @Output() dummyProjectName = [
    {
      dataDropdown : 'Dinas Kesehatan',
    },
    {
      dataDropdown : 'MacroAd',
    }
  ];

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
  ];

  date = new FormControl(moment());
  month: string[];

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
  @Output() dataCard = [
    {
      title: 'Dinas Kesehatan',
      jobDesc: 'UI/UX Designer',
      project: ['Desain Blog', 'a', 'b'],
    },
    {
      title: 'Macroad Design System',
      jobDesc: 'UI/UX Designer',
      project: ['Desain Blog', 'a', 'b'],
    }
  ];

}
