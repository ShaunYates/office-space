import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../shared';

@Component({
  selector: 'app-view-office',
  templateUrl: './view-office.component.html',
})
export class ViewOfficeComponent implements OnInit {
  @Input() company!: Company;

  constructor() {}

  ngOnInit(): void {}
}
