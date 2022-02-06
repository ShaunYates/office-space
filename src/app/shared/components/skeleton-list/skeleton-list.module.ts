import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SkeletonListUiComponent } from './skeleton-list.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [SkeletonListUiComponent],
  exports: [SkeletonListUiComponent],
})
export class SkeletonListUiModule {}
