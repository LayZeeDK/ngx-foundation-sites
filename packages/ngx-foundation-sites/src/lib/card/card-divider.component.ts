import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-card-divider',
  exportAs: 'fasCardDivider',
  imports: [],
  template: `<ng-content></ng-content>`,
})
export class FasCardDividerComponent {
  @HostBinding('className')
  protected get className(): string {
    return 'card-divider';
  }
}
