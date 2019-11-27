import { AddReportService } from "./../../pages/add-report/add-report.service";
import { AddReportComponent } from "./../../pages/add-report/add-report.component";
import { AppService } from "./../../app.service";
import { Component, OnInit, Input, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MainDashboardComponent } from "src/app/pages/admin/main-dashboard/main-dashboard.component";

export interface myinterface {}

@Component({
  selector: "card-add-report-dropdown",
  templateUrl: "./card-add-report-dropdown.component.html",
  providers: [MainDashboardComponent],
  styleUrls: ["./card-add-report-dropdown.component.sass"]
})
export class CardAddReportDropdownComponent implements OnInit {
  public index: number;
  public selfRef: CardAddReportDropdownComponent;

  public compInteraction: myinterface;

  @Input() dataProjectsName;
  @Input() dataRolesName;

  @Output() dataProjectNameFinal;
  @Output() dataRolesFinal;

  projectName = "";
  rolesName = "";

  projects = [];
  roles = [];

  constructor(
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
    private addReportComponent: AddReportComponent,
    private addReportService: AddReportService
  ) {}

  ngOnChanges() {
    this.dataProjectNameFinal = this.dataProjectsName;
    this.dataRolesFinal = this.dataRolesName;
    if (this.projects.length !== 0 && this.roles.length !== 0) {
      this.dataProjectNameFinal = this.projects;
      this.dataRolesFinal = this.roles;
    }
  }

  ngOnInit() {}

  showDetail() {
    if (
      this.addReportService.getSelectedProjectName() === "" ||
      this.addReportService.getSelectedRolesName() === ""
    ) {
      alert("Please fill the Project and Role!");
      return;
    }
    this.addReportComponent.showDetailFunction();
  }
}
