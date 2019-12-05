import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "page-admin-report-detail",
  templateUrl: "./report-detail.component.html",
  styleUrls: ["./report-detail.component.sass"]
})
export class AdminReportDetailComponent implements OnInit {
  @Input() dataDummy: any;
  selectedData: any;

  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("userToken") === null) {
      this.router.navigateByUrl("admin");
    }
  }

  change(data) {
    this.selectedData = [data];
  }
}
