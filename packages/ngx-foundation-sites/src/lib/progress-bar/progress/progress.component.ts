import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { FasColor } from '../../colors/color';
import { defaultColor } from '../../colors/default-color';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // Intentionally extending the native `<progress>` element
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'progress[fas-progress]',
  exportAs: 'fasProgress',
  styleUrls: ['../../_global-settings.scss', './progress.component.scss'],
  imports: [],
  template: `<ng-content></ng-content>`,
})
export class FasProgressComponent {
  #color: FasColor = defaultColor;
  #maxDefault = 1;
  #max = this.#maxDefault;
  #value: number | null = null;

  @Input()
  @HostBinding('className')
  get color(): FasColor {
    return this.#color;
  }
  set color(color: FasColor | null) {
    this.#color = color ?? defaultColor;
  }
  @Input()
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

  @HostBinding('attr.max')
  get maxAttribute(): string {
    return String(this.#max);
  }
  @HostBinding('attr.value')
  get valueAttribute(): string | null {
    return this.#value === null ? null : String(this.#value);
  }
}
