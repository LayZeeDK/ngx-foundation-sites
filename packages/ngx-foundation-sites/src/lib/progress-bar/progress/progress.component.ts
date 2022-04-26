import { ChangeDetectionStrategy, Component, Input, NgModule, ViewEncapsulation } from '@angular/core';

import { FasColor } from '../../color';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-progress',
  styleUrls: ['../../_global-settings.scss', './progress.component.scss'],
  template: `
    <progress [attr.max]="max" [attr.value]="value" [class]="colorClassName">
      <ng-content></ng-content>
    </progress>
  `,
})
export class FasProgressComponent {
  #maxDefault = 1;
  #max = this.#maxDefault;
  #value: number | null = null;

  @Input()
  color: FasColor = 'primary';
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

  get colorClassName(): string | null {
    return this.color === 'primary' ? null : this.color;
  }
}

@NgModule({
  declarations: [FasProgressComponent],
  exports: [FasProgressComponent],
})
export class FasProgressScam {}
