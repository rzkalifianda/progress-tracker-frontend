import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class AppService {
  private homeData = {
    success: true,
    data: [
      {
        reportDate: "2020/09/10",
        division: [
          {
            projectName: "Dinas Kesehatan",
            roleName: "UI/UX Designer",
            task: [
              {
                taskName: "Desain Blog Dinas Kesehatan",
                progress: 0
              },
              {
                taskName: "Aplikasi Puskesmas",
                progress: 100
              },
              {
                taskName: "Desain Dashboard pendaftaran",
                progress: 80
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 0
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 100
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 90
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 0
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 100
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 90
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 0
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 100
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 90
              }
            ]
          },
          {
            projectName: "Macroad Design System",
            roleName: "UI/UX Designer",
            task: [
              {
                taskName: "Desain Dashboard Element",
                progress: 0
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 100
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 90
              }
            ]
          },
          {
            projectName: "DLL",
            roleName: "Role Lain",
            task: [
              {
                taskName: "Desain Dashboard Element",
                progress: 0
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 100
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 90
              }
            ]
          },
          {
            projectName: "DLL",
            roleName: "Role Lain",
            task: [
              {
                taskName: "Desain Dashboard Element",
                progress: 0
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 100
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 90
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 0
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 100
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 90
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 0
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 100
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 90
              }
            ]
          }
        ]
      },
      {
        reportDate: "2019/09/10",
        division: [
          {
            projectName: "Dinas Kesehatan",
            roleName: "UI/UX Designer",
            task: [
              {
                taskName: "Desain Blog Dinas Kesehatan",
                progress: 0
              },
              {
                taskName: "Aplikasi Puskesmas",
                progress: 100
              },
              {
                taskName: "Desain Dashboard pendaftaran",
                progress: 80
              }
            ]
          },
          {
            projectName: "Macroad Design System",
            roleName: "UI/UX Designer",
            task: [
              {
                taskName: "Desain Dashboard Element",
                progress: 0
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 100
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 90
              }
            ]
          },
          {
            projectName: "DLL",
            roleName: "Role Lain",
            task: [
              {
                taskName: "Desain Dashboard Element",
                progress: 0
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 100
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 90
              }
            ]
          },
          {
            projectName: "DLL",
            roleName: "Role Lain",
            task: [
              {
                taskName: "Desain Dashboard Element",
                progress: 0
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 100
              },
              {
                taskName: "Desain Dashboard Element",
                progress: 90
              }
            ]
          }
        ]
      }
    ],
    message: "Berhasil fetch HOME"
  };

  getHomeData() {
    return this.homeData;
  }

  constructor() {}
}
