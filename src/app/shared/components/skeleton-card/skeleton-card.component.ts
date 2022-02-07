import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-card',
  template: `
    <ion-card>
      <ion-item>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
          </h3>
          <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
          </h3>
          <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
          </h3>
          <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
        </ion-label>
      </ion-item>
    </ion-card>
  `,
  styles: [],
})
export class SkeletonCardComponent {}
