import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-meter',
  styleUrls: ['../_global-settings.scss', './meter.component.scss'],
  template: `
    <meter
      [attr.high]="high"
      [attr.low]="low"
      [attr.max]="max"
      [attr.min]="min"
      [attr.optimum]="optimum"
      [attr.value]="value"
    >
      <ng-content></ng-content>
    </meter>
  `,
})
export class FasMeterComponent {
  @Input()
  high: number | null = null;
  @Input()
  low: number | null = null;
  @Input()
  max: number | null = null;
  @Input()
  min: number | null = null;
  @Input()
  optimum: number | null = null;
  @Input()
  value: number | null = null;
}

@NgModule({
  declarations: [FasMeterComponent],
  exports: [FasMeterComponent],
})
export class FasMeterScam {}
