import { AddReportService } from "./add-report.service";
import { Component, OnInit } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { ResponseObject } from "src/app/types";
import { Router } from "@angular/router";
import { CardAddReportDetailComponent } from "src/app/components/card-add-report-detail/card-add-report-detail.component";

@Component({
  selector: "add-report",
  providers: [CardAddReportDetailComponent],
  templateUrl: "./add-report.component.html",
  styleUrls: ["./add-report.component.sass"]
})
export class AddReportComponent implements OnInit {
  dataProjectsName: any;
  dataRolesName: any;
  objectCard: any;
  theData: any;
  selectedDataProject = "";
  selectedDataRole = "";
  loading: boolean = false;

  showDetail = false;

  taskData = [
    {
      jobTitle: "",
      jobDesc: "",
      progress: 0
    }
  ];
  divisionAddReportData = [
    {
      projectName: "",
      roleName: "",
      task: this.taskData
    }
  ];
  addReportData = {
    reportDate: new Date(),
    division: this.divisionAddReportData
  };

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private addReportService: AddReportService,
    private cardAddReportDetail: CardAddReportDetailComponent
  ) {}

  async ngOnInit() {
    if (localStorage.getItem("userToken") === null) {
      this.router.navigateByUrl("");
    }
    const token = localStorage.getItem("userToken");
    const headers = new HttpHeaders().set("authorization", token);
    await this.httpClient
      .get("https://nameless-cove-75161.herokuapp.com/api/page/project-role", {
        headers
      })
      .subscribe(
        (response: ResponseObject) => {
          this.dataProjectsName = response.data.project;
          this.dataRolesName = response.data.role;
          this.objectCard = [
            {
              projects: this.dataProjectsName,
              roles: this.dataRolesName
            }
          ];
        },
        error => {}
      );
  }

  addCardProject() {
    this.objectCard.push({
      projects: this.dataProjectsName,
      roles: this.dataRolesName
    });
  }

  selectProject(index) {
    this.addReportService.setIndex(index);

    this.addReportData.division[this.addReportService.getIndex()].task = [
      { jobTitle: "", jobDesc: "", progress: 0 }
    ];

    this.cardAddReportDetail.setAddMore();
    this.selectedDataProject = this.addReportData.division[index].projectName;
    this.selectedDataRole = this.addReportData.division[index].roleName;

    if (this.addReportData.division[index].task.length === 1) {
    } else {
    }
  }

  public showDetailFunction() {
    if (
      this.addReportData.reportDate !== this.addReportService.getSelectedDate()
    ) {
      this.divisionAddReportData[0].projectName = this.addReportService.getSelectedProjectName();
      this.divisionAddReportData[0].roleName = this.addReportService.getSelectedRolesName();
      this.divisionAddReportData[0].task = this.taskData;
      this.addReportData = {
        reportDate: this.addReportService.getSelectedDate(),
        division: this.divisionAddReportData
      };
      this.showDetail = true;
    } else {
      this.divisionAddReportData.push({
        projectName: this.addReportService.getSelectedProjectName(),
        roleName: this.addReportService.getSelectedRolesName(),
        task: this.taskData
      });
    }
  }

  submit() {
    console.log(this.addReportData.reportDate);
    console.log(this.addReportData.division);
    this.loading = false;
    this.loading = true;
    const token = localStorage.getItem("userToken");
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      authorization: token
    });
    let options = { headers: headers };
    this.httpClient
      .post(
        "https://nameless-cove-75161.herokuapp.com/api/feature/add-report",
        {
          reportDate: this.addReportData.reportDate,
          division: this.addReportData.division
        },
        options
      )
      .subscribe(
        data => {
          this.theData = data;
          if (this.theData.success === true) {
            alert("Successfully reported!");
            this.router.navigateByUrl("home");
          } else {
          }
        },
        error => {
          alert(error.message);
          return;
        }
      );
    this.loading = false;
  }
}
