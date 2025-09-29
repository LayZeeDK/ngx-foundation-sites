import type { BaseHarnessFilters } from '@angular/cdk/testing';

export interface FasProgressMeterTextHarnessFilters extends BaseHarnessFilters {
  readonly text?: RegExp | string;
  readonly accessibleText?: RegExp | string;
}
