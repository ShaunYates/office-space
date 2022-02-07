import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Company, Staff, StaffService } from '../shared';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
})
export class CompanyCardComponent implements OnInit {
  @Input() company!: Company;
  staffMembers$!: Observable<Staff[]>;
  numberOfStaff!: number;
  toggle = false;

  constructor(private readonly staffService: StaffService) {}

  ngOnInit(): void {
    this.staffMembers$ = this.staffService
      .staff$(this.company.id)
      .pipe(tap((staff) => (this.numberOfStaff = staff.length)));
  }

  editOffice(company: Company): void {}

  toggleInfo(): void {
    this.toggle = !this.toggle;
  }
}
