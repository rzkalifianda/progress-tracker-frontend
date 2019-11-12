import { AppService } from './../../app.service';
import { Component, OnInit, NgModule, Input } from '@angular/core';
import { MatCardModule } from '@angular/material';
import moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeReportService } from 'src/app/pages/home-report/home-report.service';

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
    private homeReportService: HomeReportService
  ) { }

  ngOnInit() {}

  addReport() {
    this.router.navigateByUrl('home/add-report');
  }

  reportDetail(reportdate: string) {
    this.homeReportService.newdata = reportdate;
    this.router.navigateByUrl('home/report-detail');
  }

  ngOnChanges() {
    console.log('cardComponent', this.dataHome);
  }
}
