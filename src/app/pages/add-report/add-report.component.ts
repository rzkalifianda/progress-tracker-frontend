import { AppService } from './../../app.service';
import { Component, OnInit, Input, ComponentRef, ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardAddReportDropdownComponent } from 'src/app/components/card-add-report-dropdown/card-add-report-dropdown.component';

@Component({
  selector: 'add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.sass']
})
export class AddReportComponent implements OnInit {
  @ViewChild('viewContainerRef', { static: true, read: ViewContainerRef }) VCR: ViewContainerRef;
  @Input() dataProjectName = '';
  @Input() dataRoles = '';

  index: number = 0;
  componentsReferences = [];

  showDetail = false;

  constructor( 
    private appService: AppService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
    private _translateService:AppService,
    private CFR: ComponentFactoryResolver,
  ) { }

  ngOnInit() {
    this._translateService.projectName.subscribe(
      () => {
        this._translateService.rolesName.subscribe(
          () => {
            this.showDetail = true;
          }
        );
      }
    );
  }

  addProject(){
    const componentFactory = this.CFR.resolveComponentFactory(CardAddReportDropdownComponent);
    const componentRef: ComponentRef<CardAddReportDropdownComponent> = this.VCR.createComponent(componentFactory);
    const currentComponent = componentRef.instance;
    componentRef.instance.projects = [
      {
        dataDropdown : 'Dinas Kesehatan',
      },
      {
        dataDropdown : 'MacroAd',
      }
    ];
    componentRef.instance.roles = [
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
    ];
    currentComponent.selfRef = currentComponent;
    currentComponent.index = ++this.index;
    currentComponent.compInteraction = this;
    this.componentsReferences.push(componentRef);
  }
}
