import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../shared';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
})
export class ViewCompanyComponent implements OnInit {
  @Input() company!: Company;

  constructor() {}

  ngOnInit(): void {}
}
