import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  @Output() mainDashboardName:EventEmitter <any> = new EventEmitter();

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

  getDropdownMainDashboard() {
    return this.dummyMainDashboardName;
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
