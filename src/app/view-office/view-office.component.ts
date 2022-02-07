import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EditOfficeComponent } from '../edit-office/edit-office.component';
import { CompaniesService, Company } from '../shared';

@Component({
  selector: 'app-view-office',
  templateUrl: './view-office.component.html',
})
export class ViewOfficeComponent implements OnInit, OnDestroy {
  @Input() companyId!: string;
  company$!: Observable<Company | undefined>;
  companySub!: Subscription;
  company!: Company;

  constructor(
    private readonly companiesService: CompaniesService,
    public viewOfficeModalCtrl: ModalController,
    public editOfficeModalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    this.company$ = this.companiesService.company$(this.companyId).pipe(
      tap((company) => {
        if (company) this.company = company;
      })
    );
    this.companySub = this.company$.subscribe();
  }

  ngOnDestroy(): void {
    if (this.companySub) this.companySub.unsubscribe();
  }

  closeModal(): void {
    this.viewOfficeModalCtrl.dismiss();
  }

  async editOffice(): Promise<void> {
    const modal = await this.editOfficeModalCtrl.create({
      component: EditOfficeComponent,
      componentProps: {
        company: this.company,
      },
      swipeToClose: true,
      cssClass: 'fullscreen',
    });
    modal.onDidDismiss().then((dismissedObj) => {
      // if office was deleted close this modal
      if (dismissedObj.data?.deleted) this.closeModal();
    });
    return await modal.present();
  }

  addStaffMember(): void {}
}
