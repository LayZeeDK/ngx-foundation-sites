import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { FasColor } from '../../colors/color';
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
  exportAs: 'fasProgressBar',
  styleUrls: ['../../_global-settings.scss', './progress-bar.component.scss'],
  imports: [],
  template: `<ng-content select="fas-progress-meter"></ng-content>`,
  viewProviders: [provideProgressBarPresenter()],
})
export class FasProgressBarComponent {
  #presenter = inject(ProgressBarPresenter);

  @Input()
  set color(color: FasColor | null) {
    this.#presenter.updateColor(color);
  }

  @HostBinding('role')
  protected get roleAttribute(): string {
    return 'progressbar';
  }
}
