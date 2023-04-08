import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // Intentionally extending the native `<meter>` element
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'meter[fas-meter]',
  exportAs: 'fasMeter',
  styleUrls: ['../../_global-settings.scss', './meter.component.scss'],
  imports: [],
  template: `<ng-content></ng-content>`,
})
export class FasMeterComponent {
  @Input()
  @HostBinding('attr.high')
  high: number | null = null;
  @Input()
  @HostBinding('attr.low')
  low: number | null = null;
  @Input()
  @HostBinding('attr.max')
  max: number | null = null;
  @Input()
  @HostBinding('attr.min')
  min: number | null = null;
  @Input()
  @HostBinding('attr.optimum')
  optimum: number | null = null;
  @Input()
  @HostBinding('attr.value')
  value: number | null = null;
}
