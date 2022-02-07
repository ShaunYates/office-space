import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Company, Staff, StaffService } from '../shared';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
})
export class CompanyCardComponent implements OnInit, OnDestroy {
  @Input() company!: Company;
  @Input() showView!: boolean; // whether or not to show icon to view company / office
  @Input() expanded!: boolean; // expanded view in view office
  @Output() viewOffice: EventEmitter<Event> = new EventEmitter();
  staff$!: Observable<Staff[]>;
  staffSub!: Subscription;
  numberOfStaff: number = 0;
  toggle = false;

  constructor(private readonly staffService: StaffService) {}

  ngOnInit(): void {
    this.staff$ = this.staffService
      .staff$(this.company.id)
      .pipe(tap((staff) => (this.numberOfStaff = staff.length)));
    this.staffSub = this.staff$.subscribe();
  }

  ngOnDestroy(): void {
    if (this.staffSub) this.staffSub.unsubscribe();
  }

  toggleInfo(): void {
    this.toggle = !this.toggle;
  }
}
