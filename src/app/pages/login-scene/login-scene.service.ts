import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginSceneService {

  constructor() { }

  private loginData = {}

  setLoginData(loginData: any){
    this.loginData = loginData;
  }

  getLoginData(){
    return this.loginData;
  }
}
