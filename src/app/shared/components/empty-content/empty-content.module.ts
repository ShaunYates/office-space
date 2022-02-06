import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyContentComponent } from './empty-content.component';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule],
  declarations: [EmptyContentComponent],
  exports: [EmptyContentComponent],
})
export class EmptyContentUiModule {}
