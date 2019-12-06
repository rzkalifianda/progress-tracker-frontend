import { LoginAdminService } from './login-admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.sass']
})
export class LoginAdminComponent implements OnInit {

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private loginService: LoginAdminService
  ) { }

  username: string = '';
  password: string = '';
  errorMessage: string = '';
  loading: boolean = false;
  empty: boolean = false;
  errorLogin: boolean = false;

  theData: any;

  ngOnInit() {
  }

  login(){
    this.loading = false;
    this.empty = false;
    this.errorLogin = false;
    if(this.username === '' || this.password === ''){
      this.empty = true;
      return;
    }
    this.loading = true;
    this.httpClient.post('https://nameless-cove-75161.herokuapp.com/api/auth/sign-in',
    {
      'username' : this.username,
      'password' : this.password
    })
    .subscribe(
      data => {
        this.theData = data;
        console.log(this.theData);
        if (this.theData.success === true) {
          localStorage.setItem('adminToken', this.theData.token);
          localStorage.setItem('role', 'admin');
          this.loginService.setLoginData(this.theData);
          this.router.navigateByUrl('/home-admin');
        } else {
        }
      },
      error => {
        this.errorLogin = true;
        this.errorMessage = error.error.message;
        this.loading = false;
        return;
      }
    );
  }
}