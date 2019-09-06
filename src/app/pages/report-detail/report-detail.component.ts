import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'pages-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.sass']
})
export class ReportDetailComponent implements OnInit {
  @Input() dataDummy = "x";

  constructor() { }

  ngOnInit() {
  }

}
