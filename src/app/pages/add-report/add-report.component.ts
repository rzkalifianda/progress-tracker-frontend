import { AddReportService } from './add-report.service';
import { Component, OnInit, Input, ComponentRef, ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ResponseObject } from 'src/app/types';

@Component({
  selector: 'add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.sass']
})
export class AddReportComponent implements OnInit {
  dataProjectsName: any;
  dataRolesName: any;
  objectCard: any;
  selectedData: any;

  showDetail = false;

  constructor(
    private activatedRoutes: ActivatedRoute,
    private router: Router,
    private addReportService: AddReportService,
    private CFR: ComponentFactoryResolver,
    private httpClient: HttpClient
  ) { }

  async ngOnInit(){
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders()
            .set('authorization', token);
    await this.httpClient.get('https://nameless-cove-75161.herokuapp.com/api/page/project-role',
    {
      headers
    })
    .subscribe(
      (response: ResponseObject)  => {
        this.dataProjectsName = response.data.project;
        this.dataRolesName = response.data.role;
        this.objectCard = [{
          projects: this.dataProjectsName,
          roles: this.dataRolesName,
        }]
      },
    error  => {
      console.log(error);
    }
    );
  }

  addCardProject() {
    this.objectCard.push({
      projects: this.dataProjectsName,
      roles: this.dataRolesName,
    });
  }

  selectProject(item){
    this.selectedData = [item];
  }
}
