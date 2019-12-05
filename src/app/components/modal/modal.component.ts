import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalDataUserSubmitComponent } from './modal-data-user-submit/modal-data-user-submit.component';
import { ModalDataUserDeleteComponent } from './modal-data-user-delete/modal-data-user-delete.component';
import { ModalDataUserConfirmationComponent } from './modal-data-user-confirmation/modal-data-user-confirmation.component';
import { ModalDataAdminAddComponent } from './modal-data-admin-add/modal-data-admin-add.component';
import { ModalDataAdminAddRoleComponent } from './modal-data-admin-add-role/modal-data-admin-add-role.component';
import { ModalDataAdminAddProjectComponent } from './modal-data-admin-add-project/modal-data-admin-add-project.component';
import { ModalDataAdminEditComponent } from './modal-data-admin-edit/modal-data-admin-edit.component';
import { ModalDataAdminDeleteComponent } from './modal-data-admin-delete/modal-data-admin-delete.component';
import { ModalService } from './modal.service';

@Component({
  selector: 'component-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {

  @Input() open = '';
  @Input() category = '';
  @Input() text = 'custom button modal';
  @Input() classtouse = '';

  constructor(public dialog: MatDialog, public modalService: ModalService) {}

  openModal() {
    if (this.open === 'openDialogUserSubmit') {
      this.openDialogUserSubmit ();
    } else if (this.open === 'openDialogUserDelete') {
      this.openDialogUserDelete();
    } else if (this.open === 'openDialogUserConfirmation') {
      this.openDialogUserConfirmation();
    } else if (this.open === 'openDialogAdminAdd') {
      this.openDialogAdminAdd();
    } else if (this.open === 'openDialogAdminEdit') {
      this.openDialogAdminEdit();
    } else if (this.open === 'openDialogAdminDelete') {
      this.openDialogAdminDelete(this.category);
    } else if (this.open === 'openDialogAdminAddRole') {
      this.openDialogAdminAddRole();
    } else if (this.open === 'openDialogAdminAddProject') {
      this.openDialogAdminAddProject();
    }

  }

  openDialogUserSubmit(): void {
    const dialogRef = this.dialog.open(ModalDataUserSubmitComponent, {
      width: '320px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogUserDelete(): void {
    const dialogRef = this.dialog.open(ModalDataUserDeleteComponent, {
      width: '320px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogUserConfirmation(): void {
    const dialogRef = this.dialog.open(ModalDataUserConfirmationComponent, {
      width: '320px',
      height: '308px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogAdminAdd(): void {
    const dialogRef = this.dialog.open(ModalDataAdminAddComponent , {
      width: '400px',
      height: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogAdminAddRole(): void {
    const dialogRef = this.dialog.open(ModalDataAdminAddRoleComponent , {
      width: '400px',
      height: '270px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogAdminAddProject(): void {
    const dialogRef = this.dialog.open(ModalDataAdminAddProjectComponent , {
      width: '400px',
      height: '270px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogAdminEdit(): void {
    const dialogRef = this.dialog.open(ModalDataAdminEditComponent, {
      width: '400px',
      height: '320px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogAdminDelete(category: string): void {
    this.modalService.setCategory(category);
    const dialogRef = this.dialog.open(ModalDataAdminDeleteComponent, {
      width: '320px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    console.log(this.open);
  }

}

