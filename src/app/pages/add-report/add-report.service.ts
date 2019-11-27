import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AddReportService {
  @Output() projectName: EventEmitter<any> = new EventEmitter();
  @Output() rolesName: EventEmitter<any> = new EventEmitter();

  constructor() {}
  private selectedProjectName: string = "";
  private selectedRoleName: string = "";
  private jobdescTitle: string = "";
  private jobdesc: string = "";
  private progress: number = 0;
  private task = {
    jobTitle: "",
    jobDesc: "",
    progress: 0
  };
  private index: number = 0;

  getIndex() {
    return this.index;
  }

  setIndex(index: number) {
    this.index = index;
  }
  getSelectedProjectName() {
    return this.selectedProjectName;
  }

  setSelectedProjectName(selectedProjectName: string) {
    this.selectedProjectName = selectedProjectName;
  }

  getSelectedRolesName() {
    return this.selectedRoleName;
  }

  setSelectedRolesName(selectedRolesName: string) {
    this.selectedRoleName = selectedRolesName;
  }

  setJobdescTitle(jobdescTitle: string) {
    this.jobdescTitle = jobdescTitle;
  }

  getJobdescTitle() {
    return this.jobdescTitle;
  }

  setJobdesc(jobdesc: string) {
    this.jobdesc = jobdesc;
  }

  getJobdesc() {
    return this.jobdesc;
  }

  setProgress(progress: number) {
    this.progress = progress;
  }

  getProgress() {
    return this.progress;
  }

  setTask(jobTitle: string, jobDesc: string, progress: number) {
    this.task.jobTitle = jobTitle;
    this.task.jobDesc = jobDesc;
    this.task.progress = progress;
  }

  getTask() {
    return this.task;
  }
}
