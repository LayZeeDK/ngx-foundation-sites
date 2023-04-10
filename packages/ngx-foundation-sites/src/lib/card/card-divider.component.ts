import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-card-divider',
  exportAs: 'fasCardDivider',
  styleUrls: ['./card-divider.component.scss'],
  imports: [],
  template: `<ng-content></ng-content>`,
})
export class FasCardDividerComponent {}
