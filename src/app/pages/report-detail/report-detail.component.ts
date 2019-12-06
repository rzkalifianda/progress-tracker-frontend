import {
  Component,
  OnInit,
  Input,
  Optional,
  QueryList,
  ElementRef,
  ViewChildren
} from "@angular/core";
import { ResponseObject } from "src/app/types";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { HomeReportService } from "src/app/pages/home-report/home-report.service";
import { Router } from "@angular/router";

@Component({
  selector: "page-user-report-detail",
  templateUrl: "./report-detail.component.html",
  styleUrls: ["./report-detail.component.sass"]
})
export class UserReportDetailComponent implements OnInit {
  selectedData: any;
  stringDate = "";
  stringLink = "";
  dataReportDetail: any;
  userName : any;

  @ViewChildren("commentCard", { read: ElementRef }) commentCardList: QueryList<
    ElementRef
  >;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private homeReportService: HomeReportService
  ) {}

  ngOnInit() {
    if (localStorage.getItem("userToken") === null) {
      this.router.navigateByUrl("");
    }
    if (this.homeReportService.newdata === undefined) {
      alert("No Date chosen, please chose the date first");
      this.router.navigateByUrl("home");
    } else {
      this.stringDate = new Date(this.homeReportService.newdata)
        .toISOString()
        .slice(0, 10);
    }

    this.stringLink =
      "https://nameless-cove-75161.herokuapp.com/api/page/report-detail?date=" +
      this.stringDate;
    const token = localStorage.getItem("userToken");
    const headers = new HttpHeaders().set("authorization", token);
    this.httpClient
      .get(this.stringLink, {
        headers
      })
      .subscribe(
        (response: ResponseObject) => {
          this.dataReportDetail = response.data;
        },
        error => {
          console.log("err", error);
        }
      );
  }

  change(data) {
    this.selectedData = [data];
  }

  focus() {
    const elementRef = this.commentCardList.find((item, index) => index === 4);
    elementRef.nativeElement.focus();
  }
}
