import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { MainDashboardService } from 'src/app/pages/admin/main-dashboard/main-dashboard.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-modal-data-admin-delete',
  templateUrl: './modal-data-admin-delete.component.html'
})
export class ModalDataAdminDeleteComponent implements OnInit {
  category = '';
  targetID = '';
  categorylink = '';
  authlink = '';
  constructor(
    public modalService: ModalService,
    private mainDashboardService: MainDashboardService,
    private router: Router,
    private httpClient: HttpClient,
  ) { }


  projectName: string;
  theData: any;
  errorMessage: string = '';
  errorLogin: boolean = false;

  ngOnInit() {
    if(this.mainDashboardService.selectedMainDashboardCategory === '') {
      this.modalService.setCategory('Project');
    } else {
      this.modalService.setCategory(this.mainDashboardService.selectedMainDashboardCategory);
    }
    this.category = this.modalService.getCategory();
    this.targetID = this.mainDashboardService.getSelectedID();
  }

  onCancel() {
    window.location.reload();
  }

  onConfirm() {
    if (this.category === 'User') {
      this.categorylink = 'user';
      this.authlink = 'auth';
    } else if (this.category === 'Project') {
      this.categorylink = 'project';
      this.authlink = 'feature';
    } else if (this.category === 'Role') {
      this.categorylink = 'role';
      this.authlink = 'feature';
    }

    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders()
      .set('authorization', token);
    this.httpClient.get('https://nameless-cove-75161.herokuapp.com/api/' + this.authlink + '/admin/delete-' + this.categorylink + '/' + this.targetID,
    {
      headers
    })
    .subscribe(
      data  => {
      this.theData = data;
      if (this.theData.success === true) {
        window.location.reload();
      } else {
      }
    },
    error  => {
      this.errorLogin = true;
      this.errorMessage = error.error.message;
      return;
    }
    );
  }
}
