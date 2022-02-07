import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  AlertService,
  Company,
  Staff,
  StaffService,
  ToastService,
} from 'src/app/shared';
import { EditStaffMemberComponent } from '../edit-staff-member/edit-staff-member.component';

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

  constructor(
    private readonly staffService: StaffService,
    private readonly toastService: ToastService,
    private readonly alertService: AlertService,
    public editStaffModalCtrl: ModalController
  ) {}

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

  async editStaffMember(staff: Staff): Promise<void> {
    const modal = await this.editStaffModalCtrl.create({
      component: EditStaffMemberComponent,
      componentProps: {
        staff,
      },
      cssClass: 'popup',
      swipeToClose: true,
    });
    return await modal.present();
  }

  async deleteStaffMember(staff: Staff): Promise<void> {
    try {
      await this.alertService.showAlert(
        `You are about to delete staff member ${staff.fullName}. Are you sure you want to continue?`,
        'Confirm?',
        undefined,
        [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => this.alertService.hide(),
          },
          {
            text: 'Delete',
            cssClass: 'danger',
            handler: async () => {
              await this.staffService.delete(staff.id);
              this.toastService.showInfo('Staff member successfully deleted.');
            },
          },
        ]
      );
    } catch (err) {
      this.toastService.showError('Error occured deleting staff member.');
    }
  }
}
