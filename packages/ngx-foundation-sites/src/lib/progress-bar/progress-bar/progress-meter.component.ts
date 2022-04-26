import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';

import { ProgressBarStore } from './progress-bar.store';
import {
  ProgressMeterPresenter,
  progressMeterPresenterProviders,
} from './progress-meter.presenter';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-progress-meter',
  template: `<ng-content select="fas-progress-meter-text"></ng-content>`,
  viewProviders: [progressMeterPresenterProviders],
})
export class FasProgressMeterComponent {
  #progressBar: ProgressBarStore;

  @Input()
  set max(max: number) {
    this.#progressBar.updateMax(max);
  }
  @Input()
  set min(min: number) {
    this.#progressBar.updateMin(min);
  }
  @Input()
  set value(value: number) {
    this.#progressBar.updateValue(value);
  }

  @HostBinding('class.progress-meter')
  get componentClassEnabled(): true {
    return true;
  }

  constructor(
    presenter: ProgressMeterPresenter /* Eagerly instantiate to initialize effects */,
    progressBar: ProgressBarStore
  ) {
    this.#progressBar = progressBar;
  }
}

@NgModule({
  declarations: [FasProgressMeterComponent],
  exports: [FasProgressMeterComponent],
})
export class FasProgressMeterScam {}
