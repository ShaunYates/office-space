import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-content',
  template: `
    <ion-grid
      class="ion-justify-content-center ion-align-items-center ion-page"
    >
      <ion-row class="ion-justify-content-center ion-margin" *ngIf="message">
        <ion-text color="medium">{{ message }}</ion-text>
      </ion-row>
    </ion-grid>
  `,
  styles: [],
})
export class EmptyContentComponent {
  @Input() message = '';
}
