import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

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

  getDropdownProjectName() {
    return this.dummyProjectName;
  }

  getDropdownRolesName() {
    return this.dummyRoles;
  }

  getSelectedProjectName() {
    return this.dummyProjectName.selected;
  }

  setSelectedProjectName(selectedProjectName: string){
    this.dummyProjectName.selected = selectedProjectName;
  }

  getSelectedRolesName() {
    return this.dummyRoles.selected;
  }

  setSelectedRolesName(selectedRolesName: string){
    this.dummyRoles.selected = selectedRolesName;
  }

  constructor() { }
}
