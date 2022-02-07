import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CompanyDTO } from '../dtos';
import { Company } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private COLLECTION = 'companies';

  constructor(private readonly afs: AngularFirestore) {}

  companies$(): Observable<Company[]> {
    return this.afs
      .collection<Company>(this.COLLECTION)
      .valueChanges({ idField: 'id' });
  }

  async create(company: CompanyDTO): Promise<void> {
    await this.afs.collection(this.COLLECTION).add(company);
  }

  delete(id: string): Promise<void> {
    return this.afs.collection(this.COLLECTION).doc(id).delete();
  }

  update(id: string, company: Partial<CompanyDTO>): Promise<void> {
    return this.afs
      .collection<Partial<Company>>(this.COLLECTION)
      .doc(id)
      .set(company, { merge: true });
  }
}
