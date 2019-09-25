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
        detail: [
            {name: 'Dinas Kesehatan'},
            {name: 'MacroAd'},
            {name: 'Sistem Tematik'}
        ]
      },
      {
        dataDropdown : 'Role',
        detail: [
            {name: 'Back End Engineer'},
            {name: 'Front End Engineer'},
            {name: 'Project Manager'},
            {name: 'QA Analyst'},
            {name: 'UI / UX Designer'}
        ]
      },
      {
        dataDropdown : 'User',
        detail: [
            {name: 'Karel'},
            {name: 'Fian'},
            {name: 'Sherly'},
            {name: 'Febry'},
            {name: 'Daniel'},
            {name: 'Rezkhi'}
        ]
      }
    ],
    selected: ''
  };

  private homeData =
    {
       success: true,
       data:
       [
        {
           reportDate: '2020/09/10',
           division:
           [
              {
                 projectName: 'Dinas Kesehatan',
                 roleName: 'UI/UX Designer',
                 task:
                 [
                     {
                       taskName: 'Desain Blog Dinas Kesehatan',
                       progress: 0,
                     },
                     {
                        taskName: 'Aplikasi Puskesmas',
                        progress: 100,
                     },
                     {
                        taskName: 'Desain Dashboard pendaftaran',
                        progress: 80,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 0,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 100,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 90,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 0,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 100,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 90,
                     },{
                        taskName: 'Desain Dashboard Element',
                        progress: 0,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 100,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 90,
                     },
                  ],
               },
               {
                  projectName: 'Macroad Design System',
                  roleName: 'UI/UX Designer',
                  task:
                  [
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 0,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 100,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 90,
                     },
                  ],
               },
               {
                  projectName: 'DLL',
                  roleName: 'Role Lain',
                  task:
                  [
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 0,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 100,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 90,
                     },
                  ],
               },
               {
                  projectName: 'DLL',
                  roleName: 'Role Lain',
                  task:
                  [
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 0,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 100,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 90,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 0,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 100,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 90,
                     },{
                        taskName: 'Desain Dashboard Element',
                        progress: 0,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 100,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 90,
                     },
                  ],
               },
            ],
         },
         {
           reportDate: '2019/09/10',
           division:
           [
              {
                 projectName: 'Dinas Kesehatan',
                 roleName: 'UI/UX Designer',
                 task:
                 [
                     {
                       taskName: 'Desain Blog Dinas Kesehatan',
                       progress: 0,
                     },
                     {
                        taskName: 'Aplikasi Puskesmas',
                        progress: 100,
                     },
                     {
                        taskName: 'Desain Dashboard pendaftaran',
                        progress: 80,
                     },
                  ],
               },
               {
                  projectName: 'Macroad Design System',
                  roleName: 'UI/UX Designer',
                  task:
                  [
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 0,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 100,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 90,
                     },
                  ],
               },
               {
                  projectName: 'DLL',
                  roleName: 'Role Lain',
                  task:
                  [
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 0,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 100,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 90,
                     },
                  ],
               },
               {
                  projectName: 'DLL',
                  roleName: 'Role Lain',
                  task:
                  [
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 0,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 100,
                     },
                     {
                        taskName: 'Desain Dashboard Element',
                        progress: 90,
                     },
                  ],
               },
            ],
         }
      ],
      message: 'Berhasil fetch HOME',
   };

  getHomeData(){
    return this.homeData;
  }

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
