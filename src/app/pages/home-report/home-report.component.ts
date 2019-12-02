import { AppService } from './../../app.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResponseObject } from 'src/app/types';
import { HomeReportService } from './home-report.service';

@Component({
  selector: 'page-home-report',
  templateUrl: './home-report.component.html',
  styleUrls: ['./home-report.component.sass'],
})
export class HomeReportComponent implements OnInit {
  constructor(
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private homereportService: HomeReportService,
  ) { }

  dataHome: any = {};
  dataNull: any = [];
  pembanding = [];
  tanggal = [];
  date: Date;
  hasil = [];
  temp: number = 0;

  async ngOnInit() {
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders()
      .set('authorization', token);
    await this.httpClient.get('https://nameless-cove-75161.herokuapp.com/api/page/home',
      {
        headers
      })
      .subscribe(
        (response: ResponseObject) => {
          console.log(response);
          this.dataHome = response;
          this.temp = 0;

          let temp = 0;
          for (let i = 31; i >= 0; i--) {
            for (let j = temp; j < this.dataHome.data.length; j++) {
              if (
                i + 2 ===
                new Date(this.dataHome.data[j].reportdate).getDate()
              ) {
                this.hasil.push(this.dataHome.data[j]);
                temp++;
                break;
              } else {
                this.hasil.push({
                  id: null,
                  reportdate:
                    '2019-10-' + ('0' + (i + 1)).slice(-2) + 'T17:00:00.000Z',
                  division: [],
                });
                break;
              }
            }
          }

          console.log('Hasil');
          console.log(this.hasil);
        },
        (error) => {
          console.log(error);
        },
      );
  }
}
