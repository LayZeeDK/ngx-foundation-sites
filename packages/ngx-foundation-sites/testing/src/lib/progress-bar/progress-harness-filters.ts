import type { BaseHarnessFilters } from '@angular/cdk/testing';

export interface FasProgressHarnessFilters extends BaseHarnessFilters {
  readonly value?: number;
}
