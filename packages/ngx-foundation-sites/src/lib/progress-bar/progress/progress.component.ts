import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';

import { FasColor } from '../../color';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // Intentionally extending the native `<progress>` element
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'progress[fas-progress]',
  styleUrls: ['../../_global-settings.scss', './progress.component.scss'],
  template: `<ng-content></ng-content>`,
})
export class FasProgressComponent {
  #maxDefault = 1;
  #max = this.#maxDefault;
  #value: number | null = null;

  @Input()
  @HostBinding('className')
  color: FasColor = 'primary';
  @Input()
  @HostBinding('attr.max')
  set max(max: number | null) {
    max ??= this.#maxDefault;

    if (max <= 0) {
      return;
    }

    this.#max = max;
  }
  get max(): number {
    return this.#max;
  }
  @Input()
  @HostBinding('attr.value')
  set value(value: number | null) {
    if (value !== null && value <= 0) {
      return;
    }

    if (value !== null && value > this.#max) {
      return;
    }

    this.#value = value;
  }
  get value(): number | null {
    return this.#value;
  }
}

@NgModule({
  declarations: [FasProgressComponent],
  exports: [FasProgressComponent],
})
export class FasProgressScam {}
