import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-add-report-detail',
  templateUrl: './card-add-report-detail.component.html',
  styleUrls: ['./card-add-report-detail.component.sass']
})
export class CardAddReportDetailComponent implements OnInit {

  constructor() { }

  addMore = false;

  ngOnInit() {
  }

  addMoreClicked(){
    this.addMore = !this.addMore;
  }

}
