import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Company } from '../shared';

@Component({
  selector: 'app-view-office',
  templateUrl: './view-office.component.html',
})
export class ViewOfficeComponent implements OnInit {
  @Input() company!: Company;

  constructor(public viewOfficeModalCtrl: ModalController) {}

  ngOnInit(): void {}

  closeModal(): void {
    this.viewOfficeModalCtrl.dismiss();
  }

  editOffice(): void {}

  addStaffMember(): void {}
}
