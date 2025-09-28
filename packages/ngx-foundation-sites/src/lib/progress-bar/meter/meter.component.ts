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

  // Accessibility enhancements
  @Input()
  ariaLabel: string | null = null;
  @Input()
  ariaDescribedBy: string | null = null;
  @Input()
  title: string | null = null;

  @HostBinding('attr.high')
  protected get highAttribute(): string | null {
    return this.high === null ? null : String(this.high);
  }
  @HostBinding('attr.low')
  protected get lowAttribute(): string | null {
    return this.low === null ? null : String(this.low);
  }
  @HostBinding('attr.max')
  protected get maxAttribute(): string | null {
    return this.max === null ? null : String(this.max);
  }
  @HostBinding('attr.min')
  protected get minAttribute(): string | null {
    return this.min === null ? null : String(this.min);
  }
  @HostBinding('attr.optimum')
  protected get optimumAttribute(): string | null {
    return this.optimum === null ? null : String(this.optimum);
  }
  @HostBinding('attr.value')
  protected get valueAttribute(): string | null {
    return this.value === null ? null : String(this.value);
  }

  // Accessibility attribute bindings
  @HostBinding('attr.aria-label')
  protected get ariaLabelAttribute(): string | null {
    return this.ariaLabel;
  }
  @HostBinding('attr.aria-describedby')
  protected get ariaDescribedByAttribute(): string | null {
    return this.ariaDescribedBy;
  }
  @HostBinding('attr.title')
  protected get titleAttribute(): string | null {
    return this.title;
  }
}
