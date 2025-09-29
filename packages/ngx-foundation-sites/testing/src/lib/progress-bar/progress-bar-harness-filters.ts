import type { BaseHarnessFilters } from '@angular/cdk/testing';

export interface FasProgressBarHarnessFilters extends BaseHarnessFilters {
  readonly id?: RegExp | string;
}
