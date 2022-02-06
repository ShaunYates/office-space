import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { StaffDTO } from '../dtos';
import { Staff } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private COLLECTION = 'staff';

  constructor(private readonly afs: AngularFirestore) {}

  staff$(companyId: string): Observable<Staff[]> {
    return this.afs
      .collection<Staff>(this.COLLECTION, (ref) =>
        ref.where('companyId', '==', companyId)
      )
      .valueChanges({ idField: 'id' });
  }

  async create(staff: StaffDTO): Promise<void> {
    await this.afs.collection(this.COLLECTION).add(staff);
  }

  delete(id: string): Promise<void> {
    return this.afs.collection(this.COLLECTION).doc(id).delete();
  }

  update(id: string, staff: Partial<StaffDTO>): Promise<void> {
    return this.afs
      .collection<Partial<Staff>>(this.COLLECTION)
      .doc(id)
      .set(staff, { merge: true });
  }
}
