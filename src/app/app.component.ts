import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CompaniesService, Company } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [``],
})
export class AppComponent implements OnInit {
  companies$!: Observable<Company[]>;
  companies: Company[] = [];
  loading = true;

  constructor(private readonly companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.companies$ = this.companiesService
      .companies$()
      .pipe(tap((companies) => (this.companies = companies)));
  }
}
