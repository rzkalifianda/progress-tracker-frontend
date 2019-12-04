import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-modal-data-admin-add',
  templateUrl: './modal-data-admin-add.component.html',
  styleUrls: ['./modal-data-admin-add.component.sass'],
})
export class ModalDataAdminAddComponent implements OnInit {

  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) { }

  namaUser: string;
  emailUser: string;
  userName: string;
  password: string;
  theData: any;
  errorMessage: string = '';
  errorLogin: boolean = false;


  ngOnInit() {

  }

  save(){
    this.httpClient.post('https://nameless-cove-75161.herokuapp.com/api/auth/admin/add-user',
    {
      'email' : this.emailUser,
      'name' : this.namaUser,
      'username' : this.userName,
      'password' : this.password
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
