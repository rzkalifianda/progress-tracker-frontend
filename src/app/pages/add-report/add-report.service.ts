import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddReportService {

  @Output() projectName: EventEmitter <any> = new EventEmitter();
  @Output() rolesName: EventEmitter <any> = new EventEmitter();

  constructor() { }
  private selectedProjectName: string = '';
  private selectedRoleName: string = '';

  getSelectedProjectName() {
    return this.selectedProjectName;
  }

  setSelectedProjectName(selectedProjectName: string){
    this.selectedProjectName = selectedProjectName;
    this.projectName.emit(selectedProjectName);
  }

  getSelectedRolesName() {
    return this.selectedRoleName;
  }

  setSelectedRolesName(selectedRolesName: string){
    this.selectedRoleName = selectedRolesName;
    this.rolesName.emit(selectedRolesName);
  }
}
