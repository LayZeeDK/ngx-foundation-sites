import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { take } from 'rxjs';

import { ProgressBarStore } from './progress-bar.store';
import {
  ProgressMeterPresenter,
  provideProgressMeterPresenter,
} from './progress-meter.presenter';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-progress-meter',
  exportAs: 'fasProgressMeter',
  styleUrls: ['./progress-meter.component.scss'],
  imports: [],
  template: `<ng-content select="fas-progress-meter-text"></ng-content>`,
  viewProviders: [provideProgressMeterPresenter()],
})
export class FasProgressMeterComponent {
  // eslint-disable-next-line no-unused-private-class-members -- Eagerly instantiate to initialize effects
  #presenter = inject(ProgressMeterPresenter);
  #progressBar = inject(ProgressBarStore);

  @Input()
  set max(max: number | null) {
    this.#progressBar.updateMax(max);
  }
  get max(): number | null {
    let max: number | null = null;

    this.#progressBar.max$
      .pipe(take(1))
      .subscribe(x => {
        /**
         * Set the outer variable before returning from the getter
         *
         * @remarks Requires a synchronous observable.
         */
        max = x;
      })
      /**
       * Unsubscribe to prevent memory leaks in case the observable is
       * asynchronous.
       */
      .unsubscribe();

    return max;
  }
  @Input()
  set min(min: number | null) {
    this.#progressBar.updateMin(min);
  }
  get min(): number | null {
    let min: number | null = null;

    this.#progressBar.min$
      .pipe(take(1))
      .subscribe(x => {
        /**
         * Set the outer variable before returning from the getter
         *
         * @remarks Requires a synchronous observable.
         */
        min = x;
      })
      /**
       * Unsubscribe to prevent memory leaks in case the observable is
       * asynchronous.
       */
      .unsubscribe();

    return min;
  }
  @Input()
  set value(value: number | null) {
    this.#progressBar.updateValue(value);
  }
  get value(): number | null {
    let value: number | null = null;

    this.#progressBar.value$
      .pipe(take(1))
      .subscribe(x => {
        /**
         * Set the outer variable before returning from the getter
         *
         * @remarks Requires a synchronous observable.
         */
        value = x;
      })
      /**
       * Unsubscribe to prevent memory leaks in case the observable is
       * asynchronous.
       */
      .unsubscribe();

    return value;
  }
}
