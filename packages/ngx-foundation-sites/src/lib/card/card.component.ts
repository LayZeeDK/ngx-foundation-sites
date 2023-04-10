import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-card',
  exportAs: 'fasCard',
  styleUrls: ['../_global-settings.scss', './card.component.scss'],
  imports: [],
  template: ` <ng-content></ng-content> `,
})
export class FasCardComponent {}
