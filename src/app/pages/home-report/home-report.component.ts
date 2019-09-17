import { AppService } from './../../app.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'page-home-report',
  templateUrl: './home-report.component.html',
  styleUrls: ['./home-report.component.sass']
})
export class HomeReportComponent implements OnInit {

  constructor(
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
  ) { }

  dataHome = {};

  ngOnInit() {
    this.dataHome = this.appService.getHomeData();
  }

}
