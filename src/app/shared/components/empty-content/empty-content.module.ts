import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { EmptyContentComponent } from './empty-content.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [EmptyContentComponent],
  exports: [EmptyContentComponent],
})
export class EmptyContentModule {}
