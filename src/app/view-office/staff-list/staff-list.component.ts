import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Company, Staff, StaffService } from 'src/app/shared';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
})
export class StaffListComponent implements OnInit {
  @Input() company!: Company;
  staffMembers$!: Observable<Staff[]>;
  staff: Staff[] = [];
  searchTerm: undefined | string = undefined;
  loading = true;

  constructor(private readonly staffService: StaffService) {}

  ngOnInit(): void {
    this.staffMembers$ = this.staffService.staff$(this.company.id).pipe(
      tap((staff) => {
        this.staff = staff;
        this.loading = false;
      })
    );
  }
}
