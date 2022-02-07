import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CompaniesService, Company } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  companies$!: Observable<Company[]>;
  companiesSub!: Subscription;
  companies: Company[] = [];
  loading = true;

  constructor(private readonly companiesService: CompaniesService) {}

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

  addOffice(): void {}
}
