import { Component, Input, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Company, Staff, StaffService } from 'src/app/shared';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss'],
})
export class StaffListComponent implements OnInit {
  @Input() company!: Company;
  staffMembers$!: Observable<Staff[]>;
  staff: Staff[] = [];

  constructor(private readonly staffService: StaffService) {}

  ngOnInit(): void {
    this.staffMembers$ = this.staffService
      .staff$(this.company.id)
      .pipe(tap((staff) => (this.staff = staff)));
  }
}
