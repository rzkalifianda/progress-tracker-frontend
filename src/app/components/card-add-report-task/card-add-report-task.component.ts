import { AddReportComponent } from "./../../pages/add-report/add-report.component";
import { Component, OnInit } from "@angular/core";
import { AddReportService } from "src/app/pages/add-report/add-report.service";

@Component({
  selector: "card-add-report-task",
  templateUrl: "./card-add-report-task.component.html",
  styleUrls: ["./card-add-report-task.component.sass"]
})
export class CardAddReportTaskComponent implements OnInit {
  jobTitle: string = "";
  jobDesc: string = "";
  index: number;

  show: boolean = false;
  opened = false;
  checked = false;
  progresssize: number = 0;
  updateSetting(event) {
    this.progresssize = event.value;
  }

  constructor(
    private addReportService: AddReportService,
    private addReportComponent: AddReportComponent
  ) {}

  ngOnInit() {}

  save() {
    this.index = this.addReportService.getIndex();
    if (
      this.addReportComponent.addReportData.division[this.index].task[0]
        .jobTitle == ""
    ) {
      this.addReportComponent.addReportData.division[
        this.index
      ].task[0].jobTitle = this.jobTitle;
      this.addReportComponent.addReportData.division[
        this.index
      ].task[0].jobDesc = this.jobDesc;
      this.addReportComponent.addReportData.division[
        this.index
      ].task[0].progress = this.progresssize;
    } else {
      this.addReportComponent.addReportData.division[this.index].task.push({
        jobTitle: this.jobTitle,
        jobDesc: this.jobDesc,
        progress: this.progresssize
      });
    }
  }
}
