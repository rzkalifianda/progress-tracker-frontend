import { AppService } from "./../../app.service";
import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "card-add-report-detail",
  templateUrl: "./card-add-report-detail.component.html",
  styleUrls: ["./card-add-report-detail.component.sass"]
})
export class CardAddReportDetailComponent implements OnInit {
  constructor(
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
    private _translateService: AppService
  ) {}

  addMore = false;
  @Input() projectName = "";
  @Input() rolesName = "";

  ngOnInit() {}

  addMoreClicked() {
    this.addMore = !this.addMore;
  }

  setAddMore() {
    this.addMore = false;
  }
}
