import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal-data-admin-delete',
  templateUrl: './modal-data-admin-delete.component.html'
})
export class ModalDataAdminDeleteComponent implements OnInit {
  category = '';
  constructor(public modalService: ModalService) { }

  ngOnInit() {
    this.category = this.modalService.getCategory();
  }

}
