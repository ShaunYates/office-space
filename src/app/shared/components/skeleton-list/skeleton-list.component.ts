import { Component, Input } from '@angular/core';

@Component({
  selector: 'ih-app-client-shared-components-skeleton-list-ui',
  template: `
    <ion-list>
      <ion-item>
        <ion-avatar slot="start" *ngIf="avatar">
          <ion-skeleton-text></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
          </h3>
          <p *ngIf="description">
            <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start" *ngIf="avatar">
          <ion-skeleton-text></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
          </h3>
          <p *ngIf="description">
            <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start" *ngIf="avatar">
          <ion-skeleton-text></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
          </h3>
          <p *ngIf="description">
            <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
    </ion-list>
  `,
  styles: [],
})
export class SkeletonListUiComponent {
  @Input() avatar = false;
  @Input() description = false;
}
