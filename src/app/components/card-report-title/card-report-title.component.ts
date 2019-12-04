import { AddReportService } from "src/app/pages/add-report/add-report.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "component-card-report-title",
  templateUrl: "./card-report-title.component.html",
  styleUrls: ["./card-report-title.component.sass"]
})
export class CardReportTitleComponent implements OnInit {
  constructor(private addReportService: AddReportService) {}

  selectedDate: any = new Date();
  ngOnInit() {
    this.selectedDate = this.addReportService.getSelectedDate();
  }
}
