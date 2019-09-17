import { Component, OnInit, NgModule, Input } from '@angular/core';
import { MatCardModule } from '@angular/material';
import moment from 'moment';

@Component({
  selector: 'component-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})

export class CardComponent implements OnInit {
  @Input() data = [];
  @Input() dataHome: any = {};

  constructor() { }

  ngOnInit() {
    const count = this.dataHome.data.length;

    for(let q = 0; q< count; q++)
    {
      let testDate = this.dataHome.data[q].reportDate;
      let finalDate = moment(testDate).format('dddd, DD MMMM YYYY');
      this.dataHome.data[q].reportDate = finalDate;
    }
  }
}
