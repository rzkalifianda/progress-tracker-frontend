import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainDashboardService {

  constructor() { }
  selectedMainDashboardCategory: string = '';
  selectedID: string = '';
  selectedName: string = '';

  getSelectedMainDashboardCategory() {
    return this.selectedMainDashboardCategory;
  }
  setSelectedMainDashboardCategory(selectedMainDashboardCategory: string) {
    this.selectedMainDashboardCategory = selectedMainDashboardCategory;
  }

  getSelectedName() {
    return this.selectedName;
  }
  setSelectedName(selectedID: string) {
    this.selectedName = this.selectedName;
  }

  getSelectedID() {
    return this.selectedID;
  }
  setSelectedID(selectedID: string) {
    this.selectedID = selectedID;
  }
}
