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

  @HostBinding('attr.high')
  get highAttribute(): string | null {
    return this.high === null ? null : String(this.high);
  }
  @HostBinding('attr.low')
  get lowAttribute(): string | null {
    return this.low === null ? null : String(this.low);
  }
  @HostBinding('attr.max')
  get maxAttribute(): string | null {
    return this.max === null ? null : String(this.max);
  }
  @HostBinding('attr.min')
  get minAttribute(): string | null {
    return this.min === null ? null : String(this.min);
  }
  @HostBinding('attr.optimum')
  get optimumAttribute(): string | null {
    return this.optimum === null ? null : String(this.optimum);
  }
  @HostBinding('attr.value')
  get valueAttribute(): string | null {
    return this.value === null ? null : String(this.value);
  }
}
