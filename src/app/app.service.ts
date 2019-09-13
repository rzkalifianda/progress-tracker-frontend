import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  @Output() projectName:EventEmitter <any> = new EventEmitter();
  @Output() rolesName:EventEmitter <any> = new EventEmitter();
  @Output() mainDashboardName:EventEmitter <any> = new EventEmitter();

  private dummyProjectName =
  {
    data:  [
      {
        dataDropdown : 'Dinas Kesehatan',
      },
      {
        dataDropdown : 'MacroAd',
      }
    ],
    selected: ''
  };

  private dummyRoles =
  {
    data: [
      {
        dataDropdown : 'Back End Engineer',
      },
      {
        dataDropdown : 'Front End Engineer',
      },
      {
        dataDropdown : 'Project Manager',
      },
      {
        dataDropdown : 'QA Analyst',
      },
      {
        dataDropdown : 'UI / UX Designer',
      }
    ],
    selected: ''
  };

  private dummyMainDashboardName =
  {
    data: [
      {
        dataDropdown : 'Project',
      },
      {
        dataDropdown : 'User',
      },
      {
        dataDropdown : 'Role',
      }
    ],
    selected: ''
  };

  getDropdownProjectName() {
    return this.dummyProjectName;
  }

  getDropdownRolesName() {
    return this.dummyRoles;
  }

  getDropdownMainDashboard() {
    return this.dummyMainDashboardName;
  }

  getSelectedProjectName() {
    return this.dummyProjectName.selected;
  }

  setSelectedProjectName(selectedProjectName: string){
    this.dummyProjectName.selected = selectedProjectName;
    this.projectName.emit();
  }

  getSelectedRolesName() {
    return this.dummyRoles.selected;
  }

  setSelectedRolesName(selectedRolesName: string){
    this.dummyRoles.selected = selectedRolesName;
    this.rolesName.emit(selectedRolesName);
  }

  getSelectedMainDashboardName() {
    return this.dummyMainDashboardName.selected;
  }

  setSelectedMainDashboardName(selectedMainDashboardName: string){
    this.dummyMainDashboardName.selected = selectedMainDashboardName;
    this.mainDashboardName.emit(selectedMainDashboardName);
  }

  constructor() { }
}
