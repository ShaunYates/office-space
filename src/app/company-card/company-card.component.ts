import { Component, Input, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Company, Staff, StaffService } from '../shared';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss'],
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

  editCompany(): void {}

  toggleInfo(): void {
    this.toggle = !this.toggle;
  }
}
