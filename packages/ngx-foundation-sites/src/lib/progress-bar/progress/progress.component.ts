import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';

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
  @Input()
  color: FasColor = 'primary';
  @Input()
  max = 1;
  @Input()
  value = 0;

  get colorClassName(): string | null {
    return this.color === 'primary' ? null : this.color;
  }
}

@NgModule({
  declarations: [FasProgressComponent],
  exports: [FasProgressComponent],
})
export class FasProgressScam {}
