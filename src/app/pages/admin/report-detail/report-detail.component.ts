import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-admin-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.sass']
})
export class AdminReportDetailComponent implements OnInit {
  @Input() dataDummy: any;
  selectedData: any;

  constructor() { }

  ngOnInit() {
  }

  change(data) {
    this.selectedData = [data];
  }

}