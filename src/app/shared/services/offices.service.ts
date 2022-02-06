import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { OfficeDTO } from '../dtos';
import { Office } from '../models';

@Injectable({
  providedIn: 'root',
})
export class OfficesService {
  private COLLECTION = 'office';

  constructor(private readonly afs: AngularFirestore) {}

  offices$(): Observable<Office[]> {
    return this.afs.collection<Office>(this.COLLECTION).valueChanges();
  }

  async create(office: OfficeDTO): Promise<void> {
    await this.afs.collection(this.COLLECTION).add(office);
  }

  delete(id: string): Promise<void> {
    return this.afs.collection(this.COLLECTION).doc(id).delete();
  }

  update(id: string, office: Partial<OfficeDTO>): Promise<void> {
    return this.afs
      .collection<Partial<Office>>(this.COLLECTION)
      .doc(id)
      .set(office, { merge: true });
  }
}
