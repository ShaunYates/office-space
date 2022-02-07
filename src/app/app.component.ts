import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CompaniesService, Company } from './shared';
import { ViewOfficeComponent } from './view-office/view-office.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  companies$!: Observable<Company[]>;
  companiesSub!: Subscription;
  companies: Company[] = [];
  loading = true;

  constructor(
    private readonly companiesService: CompaniesService,
    public viewOfficeModalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    this.companies$ = this.companiesService.companies$().pipe(
      tap((companies) => {
        this.loading = false;
        this.companies = companies;
      })
    );
    this.companiesSub = this.companies$.subscribe();
  }

  ngOnDestroy(): void {
    if (this.companiesSub) this.companiesSub.unsubscribe();
  }

  async viewOffice(company: Company): Promise<void> {
    const modal = await this.viewOfficeModalCtrl.create({
      component: ViewOfficeComponent,
      componentProps: {
        company,
      },
      swipeToClose: true,
      cssClass: 'fullscreen',
    });
    return await modal.present();
  }

  addOffice(): void {}
}
