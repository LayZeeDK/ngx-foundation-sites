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
  imports: [],
  template: `<ng-content></ng-content>`,
})
export class FasCardDividerComponent {
  @HostBinding('className')
  get className(): string {
    return 'card-divider';
  }
}
