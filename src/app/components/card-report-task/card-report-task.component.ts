import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'components-card-report-task',
  templateUrl: './card-report-task.component.html',
  styleUrls: ['./card-report-task.component.sass']
})
export class CardReportTaskComponent implements OnInit {
  @Input() data = [];
  @Output() finalData = [];

  constructor() { }

  ngOnInit() {
    console.log('Data', this.data);
    this.finalData = this.data;
  }

}
