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
  selector: 'fas-progress-bar',
  styleUrls: ['../_global-settings.scss', './progress-bar.component.scss'],
  template: `
    <div class="progress-meter" [style.width.%]="widtPercentage">
      <ng-content select="fas-progress-bar-text"></ng-content>
    </div>
  `,
})
export class FasProgressBarComponent {
  get #colorClassName(): string | null {
    return this.color === 'primary' ? null : this.color;
  }

  @Input()
  color: FasColor = 'primary';
  @Input()
  @HostBinding('aria-valuemax')
  max = 100;
  @Input()
  @HostBinding('aria-valuemin')
  min = 0;
  @Input()
  @HostBinding('aria-valuenow')
  value = 0;

  @HostBinding('className')
  get className(): string {
    return ['progress', this.#colorClassName]
      .filter(cssClass => cssClass !== null)
      .join(' ');
  }
  @HostBinding('role')
  get roleAttribute(): string {
    return 'progressbar';
  }

  get widthPercentage(): number {
    const percentage = (this.value / (this.max - this.min)) * 100;

    return Number.isNaN(percentage) ? percentage : 0;
  }
}

@NgModule({
  declarations: [FasProgressBarComponent],
  exports: [FasProgressBarComponent],
})
export class FasProgressBarScam {}
