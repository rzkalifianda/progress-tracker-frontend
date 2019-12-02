import { AppService } from './../../../app.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseObject } from 'src/app/types';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MainDashboardService } from './main-dashboard.service';

@Component({
  selector: 'page-admin-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.sass']
})
export class MainDashboardComponent implements OnInit {
  dataProjectName: any;
  dataRoleName: any;
  dataUserName: any;

  @Input() dataProjectsName;
  @Input() dataRolesName;
  @Input() dataUsersName;
  @Input() searchDataProject;
  @Input() searchDataRole;
  @Input() searchDataUser;

  @Output() dataProjectNameFinal;
  @Output() dataRolesNameFinal;
  @Output() dataUsersNameFinal;
  @Output() dataMainDashboardDropdown;

  showDetailProject = true;
  showDetailUser = false;
  showDetailRole = false;
  showSearchProject = false;
  showSearchRole = false;
  showSearchUser = false;
  showModalProject = true;
  showModalRole = false;
  showModalUser= false;
  public index: number;
  public selfRef: MainDashboardComponent;


  theSearchResult = '';
  theCurrentChosen = '';
  featureTambah = '';

  mainDashboards = [];
  constructor(
    private appService: AppService,
    private mainDashboardService: MainDashboardService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
    private _translateService: AppService,
    private httpClient: HttpClient
  ) { }

  selectedMainDashboardDropdown: any = '';


  showResult() {
    this.selectedMainDashboardDropdown = this.mainDashboardService.getSelectedMainDashboardCategory();
    this.featureTambah = this.selectedMainDashboardDropdown;

    if (this.selectedMainDashboardDropdown === 'Project' || this.selectedMainDashboardDropdown === '') {
      if(this.theSearchResult.length === 0) {
        this.showDetailProject = true;
        this.showSearchProject = false;
      } else {
        this.showDetailProject = false;
        this.showSearchProject = true;
      }
      this.showDetailRole = false;
      this.showSearchRole = false;
      this.showDetailUser = false;
      this.showSearchUser = false;
      this.showModalProject = true;
      this.showModalRole = false;
      this.showModalUser = false;
    } else if (this.selectedMainDashboardDropdown === 'Role') {
      if(this.theSearchResult.length === 0) {
        this.showDetailRole = true;
        this.showSearchRole = false;
      } else {
        this.showDetailRole = false;
        this.showSearchRole = true;
      }
      this.showDetailProject = false;
      this.showSearchProject = false;
      this.showDetailUser = false;
      this.showSearchUser = false;
      this.showModalProject = false;
      this.showModalRole = true;
      this.showModalUser = false;
    } else if (this.selectedMainDashboardDropdown === 'User') {
      if(this.theSearchResult.length === 0) {
        this.showDetailUser = true;
        this.showSearchUser = false;
      } else {
        this.showDetailUser = false;
        this.showSearchUser = true;
      }
      this.showDetailRole = false;
      this.showSearchRole = false;
      this.showDetailProject = false;
      this.showSearchProject = false;
      this.showModalProject = false;
      this.showModalRole = false;
      this.showModalUser = true;
    }
  }

  ngOnInit() {
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders()
            .set('authorization', token);
    this.httpClient.get('https://nameless-cove-75161.herokuapp.com/api/page/admin/home',
    {
      headers
    })
    .subscribe(
      (response: ResponseObject)  => {
        const homeDropdown =
        [
          { id : 1, projectname : 'Project', },
          { id : 2, projectname : 'Role',  },
          { id : 3, projectname : 'User',  },
        ];
        this.featureTambah = 'Project';
        this.dataMainDashboardDropdown = homeDropdown;
        this.dataProjectName = response.data.project;
        this.dataRoleName = response.data.role;
        this.dataUserName = response.data.user;
      },
    error  => {
      console.log('err', error);
    }
    );
  }

  onSubmit(searchResult: string) {
    this.searchDataProject = this.dataProjectName;
    this.searchDataRole = this.dataRoleName;
    this.searchDataUser = this.dataUserName;
    this.theSearchResult = searchResult;
    this.searchDataProject =
      this.searchDataProject.filter(theData => theData.projectname.toLowerCase().includes(this.theSearchResult.toLowerCase()) );
    this.searchDataRole =
      this.searchDataRole.filter(theData => theData.rolename.toLowerCase().includes(this.theSearchResult.toLowerCase()) );
    this.searchDataUser =
      this.searchDataUser.filter(theData => theData.username.toLowerCase().includes(this.theSearchResult.toLowerCase()) );
    this.showResult();
  }
  getDetailName(chosenData) {
    if (this.selectedMainDashboardDropdown === 'Project' || this.selectedMainDashboardDropdown === '') {
      this.theCurrentChosen = chosenData.projectname;
    } else if (this.selectedMainDashboardDropdown === 'Role') {
      this.theCurrentChosen = chosenData.rolename;
    } else if (this.selectedMainDashboardDropdown === 'User') {
      this.theCurrentChosen = chosenData.username;
    }
  }
}
