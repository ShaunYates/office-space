import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { StaffDTO, StaffService, ToastService } from 'src/app/shared';

@Component({
  selector: 'app-add-staff-member',
  templateUrl: './add-staff-member.component.html',
})
export class AddStaffMemberComponent implements OnInit {
  @Input() companyId!: string;
  form = this.fb.group({
    firstName: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(65)],
    ],
    lastName: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(65)],
    ],
  });
  busy = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly staffService: StaffService,
    private readonly toastService: ToastService,
    public addStaffModalCtrl: ModalController
  ) {}

  ngOnInit(): void {}

  closeModal(): void {
    this.addStaffModalCtrl.dismiss();
  }

  async onSubmit() {
    try {
      if (this.form.valid) {
        this.busy = true;
        const dto: StaffDTO = {
          companyId: this.companyId,
          ...this.form.value,
          fullName: `${this.firstName.value} ${this.lastName.value}`,
        };
        await this.staffService.create(dto);

        this.toastService.showInfo('Staff member successfully added.');
        this.closeModal();
      }
    } catch (err) {
      this.toastService.showError('Error occured adding staff member.');
    }
  }

  get firstName(): FormControl {
    return this.form.get('firstName') as FormControl;
  }

  get firstNameError(): string {
    if (this.firstName.errors?.['required']) return 'First name is required';
    if (this.firstName.value.length < 2)
      return 'First name needs to be 2 characters or longer';
    if (this.firstName.value.length > 65)
      return 'First name has a maximum of 65 characters';

    return 'First name is invalid';
  }

  get lastName(): FormControl {
    return this.form.get('lastName') as FormControl;
  }

  get lastNameError(): string {
    if (this.lastName.errors?.['required']) return 'Last name is required';
    if (this.lastName.value.length < 2)
      return 'Last name needs to be 2 characters or longer';
    if (this.lastName.value.length > 65)
      return 'Last name has a maximum of 65 characters';

    return 'Last name is invalid';
  }
}
