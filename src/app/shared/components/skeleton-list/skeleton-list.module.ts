import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SkeletonListComponent } from './skeleton-list.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [SkeletonListComponent],
  exports: [SkeletonListComponent],
})
export class SkeletonListModule {}
