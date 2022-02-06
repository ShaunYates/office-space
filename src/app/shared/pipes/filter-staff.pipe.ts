import { Pipe, PipeTransform } from '@angular/core';
import { Staff } from '../models';

@Pipe({
  name: 'filterStaffPipe',
})
export class FilterStaffPipe implements PipeTransform {
  transform(staff: Staff[] | null, searchTerm: string): Staff[] | null {
    return !staff || !searchTerm
      ? staff
      : staff.filter(
          (staffMember) =>
            staffMember.fullName
              .toLowerCase()
              .indexOf(searchTerm.toLowerCase()) !== -1
        );
  }
}
