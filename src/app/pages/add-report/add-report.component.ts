import { AppService } from './../../app.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.sass']
})
export class AddReportComponent implements OnInit {

  @Input() dataProjectName = '';
  @Input() dataRoles = '';

  showDetail = false;

  constructor( 
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log(this.appService.getSelectedProjectName());
  }

  addProject(){
    this.showDetail = !this.showDetail;
  }

}
