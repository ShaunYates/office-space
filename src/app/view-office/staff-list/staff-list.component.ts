import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Company, Staff, StaffService } from 'src/app/shared';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
})
export class StaffListComponent implements OnInit, OnDestroy {
  @Input() company!: Company;
  staffMembers$!: Observable<Staff[]>;
  staffMembersSub!: Subscription;
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
    this.staffMembersSub = this.staffMembers$.subscribe();
  }

  ngOnDestroy(): void {
    if (this.staffMembersSub) this.staffMembersSub.unsubscribe();
  }
}
