import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component';
import { AdminReportDetailComponent } from './pages/admin/report-detail/report-detail.component';
import { UserReportDetailComponent } from './pages/report-detail/report-detail.component';
import { HomeReportComponent } from './pages/home-report/home-report.component';
// import { LoginSceneComponent } from './pages/login-scene/login-scene.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSceneComponent } from './pages/login-scene/login-scene.component';
import { AddReportComponent } from './pages/add-report/add-report.component';
import { MainDashboardComponent } from './pages/admin/main-dashboard/main-dashboard.component';


export const routes: Routes = [
  {
    path: '',
    component: LoginSceneComponent
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        component: HomeReportComponent
      },
      {
        path: 'add-report',
        component: AddReportComponent
      },
      {
        path: 'report-detail',
        component: UserReportDetailComponent
      }
    ]
  },
  {
    path: 'admin',
    component: LoginAdminComponent
  },
  {
    path: 'home-admin',
    children: [
      {
        path: '',
        component: MainDashboardComponent
      },
      {
        path: 'report-detail',
        component: AdminReportDetailComponent
      },
      {
        path: 'main-dashboard-time',
        component: MainDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
