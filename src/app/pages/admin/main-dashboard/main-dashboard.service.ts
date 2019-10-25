import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainDashboardService {

  constructor() { }
  private selectedMainDashboardCategory: string = '';
  private selectedID: number;

  getSelectedMainDashboardCategory() {
    return this.selectedMainDashboardCategory;
  }
  setSelectedMainDashboardCategory(selectedMainDashboardCategory: string) {
    this.selectedMainDashboardCategory = selectedMainDashboardCategory;
  }

  getSelectedID() {
    return this.selectedID;
  }
  setSelectedID(selectedID: number) {
    this.selectedID = selectedID;
  }
}
