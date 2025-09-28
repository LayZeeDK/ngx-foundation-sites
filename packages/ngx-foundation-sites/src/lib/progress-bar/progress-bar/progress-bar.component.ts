import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { take } from 'rxjs';

import type { FasColor } from '../../colors/color';
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
  get color(): FasColor | null {
    let color: FasColor | null = null;

    this.#presenter.color$
      .pipe(take(1))
      .subscribe(x => {
        /**
         * Set the outer variable before returning from the getter
         *
         * @remarks Requires a synchronous observable.
         */
        color = x;
      })
      /**
       * Unsubscribe to prevent memory leaks in case the observable is
       * asynchronous.
       */
      .unsubscribe();

    return color;
  }

  @HostBinding('role')
  protected get roleAttribute(): string {
    return 'progressbar';
  }
}
