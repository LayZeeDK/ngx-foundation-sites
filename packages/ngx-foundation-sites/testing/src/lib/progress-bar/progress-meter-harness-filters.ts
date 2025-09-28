import type { BaseHarnessFilters } from '@angular/cdk/testing';

export interface FasProgressMeterHarnessFilters extends BaseHarnessFilters {
  readonly value?: number;
}
