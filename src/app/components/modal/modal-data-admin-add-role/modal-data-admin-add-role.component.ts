import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-data-admin-add-role',
  templateUrl: './modal-data-admin-add-role.component.html',
  styleUrls: ['./modal-data-admin-add-role.component.sass'],
})
export class ModalDataAdminAddRoleComponent implements OnInit {

  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) { }

  roleName: string;
  theData: any;
  errorMessage: string = '';
  errorLogin: boolean = false;

  ngOnInit() {
  }
  save(){
    this.httpClient.post('https://nameless-cove-75161.herokuapp.com/api/feature/admin/add-role',
    {
      'roleName' : this.roleName,
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
