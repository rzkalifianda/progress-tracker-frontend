import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  constructor() { }

  private loginData = {}

  setLoginData(loginData: any){
    this.loginData = loginData;
  }

  getLoginData(){
    return this.loginData;
  }
}