import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

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
  imports: [],
  template: `<ng-content select="fas-progress-meter-text"></ng-content>`,
  viewProviders: [provideProgressMeterPresenter()],
})
export class FasProgressMeterComponent {
  #presenter = inject(
    ProgressMeterPresenter
  ); /* Eagerly instantiate to initialize effects */
  #progressBar = inject(ProgressBarStore);

  @Input()
  set max(max: number | null) {
    this.#progressBar.updateMax(max);
  }
  @Input()
  set min(min: number | null) {
    this.#progressBar.updateMin(min);
  }
  @Input()
  set value(value: number | null) {
    this.#progressBar.updateValue(value);
  }

  @HostBinding('class.progress-meter')
  get componentClassEnabled(): true {
    return true;
  }
}
