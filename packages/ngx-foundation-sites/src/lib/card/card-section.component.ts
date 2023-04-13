import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-card-section',
  exportAs: 'fasCardSection',
  styleUrls: ['./card-section.component.scss'],
  imports: [],
  template: `<ng-content></ng-content>`,
})
export class FasCardSectionComponent {}
