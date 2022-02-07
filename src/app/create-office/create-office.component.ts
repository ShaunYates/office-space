import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CompaniesService, CompanyDTO, ToastService } from '../shared';

@Component({
  selector: 'app-create-office',
  templateUrl: './create-office.component.html',
})
export class CreateOfficeComponent implements OnInit {
  form = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(65)],
    ],
    address: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', Validators.required],
    capacity: ['', Validators.required],
  });
  busy = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly companiesService: CompaniesService,
    private readonly toastService: ToastService,
    public createOfficeModalCtrl: ModalController
  ) {}

  ngOnInit(): void {}

  closeModal(): void {
    this.createOfficeModalCtrl.dismiss();
  }

  async onSubmit() {
    try {
      if (this.form.valid) {
        this.busy = true;
        const dto: CompanyDTO = {
          ...this.form.value,
        };
        await this.companiesService.create(dto);

        this.toastService.showInfo('Office space successfully created.');
        this.closeModal();
      }
    } catch (err) {
      this.toastService.showError('Error occured creating office space.');
    }
  }

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get nameError(): string {
    if (this.name.errors?.['required']) return 'Company name is required';
    if (this.name.value.length < 2)
      return 'Company name needs to be 2 characters or longer';
    if (this.name.value.length > 65)
      return 'Company name has a maximum of 65 characters';

    return 'Company name is invalid';
  }

  get address(): FormControl {
    return this.form.get('address') as FormControl;
  }

  get addressError(): string {
    if (this.address.errors?.['required']) return 'Address is required';
    if (this.address.value.length > 100)
      return 'Address has a maximum of 100 characters';

    return 'Address is invalid';
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get emailError(): string {
    if (this.email.errors?.['required']) return 'Email is required';
    return 'Email is invalid';
  }

  get phoneNumber(): FormControl {
    return this.form.get('phoneNumber') as FormControl;
  }

  get phoneNumberError(): string {
    if (this.phoneNumber.errors?.['required'])
      return 'Phone number is required';
    return 'Phone number is invalid';
  }

  get capacity(): FormControl {
    return this.form.get('capacity') as FormControl;
  }

  get capacityError(): string {
    if (this.capacity.errors?.['required'])
      return 'Maximum capacity is required';
    return 'Maximum capacity is invalid';
  }
}
