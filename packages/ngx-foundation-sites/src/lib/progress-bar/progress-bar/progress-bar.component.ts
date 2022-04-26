import { ChangeDetectionStrategy, Component, HostBinding, Input, NgModule, ViewEncapsulation } from '@angular/core';

import { FasColor } from '../../color';
import { ProgressBarPresenter, progressBarPresenterProviders } from './progress-bar.presenter';
import { ProgressBarStore } from './progress-bar.store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ProgressBarStore],
  selector: 'fas-progress-bar',
  styleUrls: ['../../_global-settings.scss', './progress-bar.component.scss'],
  template: `<ng-content select="fas-progress-meter"></ng-content>`,
  viewProviders: [progressBarPresenterProviders],
})
export class FasProgressBarComponent {
  #presenter: ProgressBarPresenter;

  @Input()
  set color(color: FasColor) {
    this.#presenter.updateColor(color);
  }

  @HostBinding('className')
  get className(): string {
    return 'progress';
  }
  @HostBinding('role')
  get roleAttribute(): string {
    return 'progressbar';
  }

  constructor(presenter: ProgressBarPresenter) {
    this.#presenter = presenter;
  }
}

@NgModule({
  declarations: [FasProgressBarComponent],
  exports: [FasProgressBarComponent],
})
export class FasProgressBarScam {}
