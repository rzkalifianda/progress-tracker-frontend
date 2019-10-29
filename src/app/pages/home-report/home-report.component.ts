import { AppService } from './../../app.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResponseObject } from 'src/app/types';

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
    private httpClient: HttpClient
  ) { }

  dataHome: any = {};

  async ngOnInit() {
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders()
            .set('authorization', token);
    await this.httpClient.get('https://nameless-cove-75161.herokuapp.com/api/page/home',
    {
      headers
    })
    .subscribe(
      (response: ResponseObject)  => {
        console.log(response);
        this.dataHome = response;
      },
    error  => {
      console.log(error);
    }
    );

  }

}
