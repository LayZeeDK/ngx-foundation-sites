import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { FasColor } from '../../color';
import {
  ProgressBarPresenter,
  provideProgressBarPresenter,
} from './progress-bar.presenter';
import { ProgressBarStore } from './progress-bar.store';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ProgressBarStore],
  selector: 'fas-progress-bar',
  styleUrls: ['../../_global-settings.scss', './progress-bar.component.scss'],
  imports: [],
  template: `<ng-content select="fas-progress-meter"></ng-content>`,
  viewProviders: [provideProgressBarPresenter()],
})
export class FasProgressBarComponent {
  #presenter = inject(ProgressBarPresenter);

  @Input()
  set color(color: FasColor) {
    this.#presenter.updateColor(color);
  }

  @HostBinding('class.progress')
  get componentClassEnabled(): boolean {
    return true;
  }
  @HostBinding('role')
  get roleAttribute(): string {
    return 'progressbar';
  }
}
