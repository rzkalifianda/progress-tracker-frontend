import { AppService } from './../../app.service';
import { Component, OnInit, NgModule, Input } from '@angular/core';
import { MatCardModule } from '@angular/material';
import moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'component-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})

export class CardComponent implements OnInit {
  @Input() dataHome: any = {};

  constructor(
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const count = this.dataHome.data.length;
    for (let q = 0; q < count; q++) {
      const testDate = this.dataHome.data[q].reportDate;
      const finalDate = moment(testDate).format('dddd, DD MMMM YYYY');
      this.dataHome.data[q].reportDate = finalDate;
      this.dataHome[0].data[q].reportDate = finalDate;
      this.dataHome.data[q].reportDate = finalDate;
    }
  }

  addReport(){
    this.router.navigateByUrl('home/add-report');
  }

  reportDetail(){
    this.router.navigateByUrl('home/report-detail');
  }
}
