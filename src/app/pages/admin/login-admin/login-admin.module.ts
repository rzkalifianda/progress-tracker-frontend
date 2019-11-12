import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAdminRoutingModule } from './login-admin-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginAdminRoutingModule,
  ],
  exports: [
    // LoginAdminComponent
  ]
})
export class LoginAdminModule { }