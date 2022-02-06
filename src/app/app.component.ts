import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CompaniesService, Company } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [``],
})
export class AppComponent implements OnInit {
  companies$!: Observable<Company[]>;
  companies: Company[] = [];
  busy = true;

  constructor(private readonly companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.companies$ = this.companiesService
      .companies$()
      .pipe(tap((companies) => (this.companies = companies)));
  }
}
