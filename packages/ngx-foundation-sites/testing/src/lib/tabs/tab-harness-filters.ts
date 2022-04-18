import { BaseHarnessFilters } from '@angular/cdk/testing';

export interface FasTabHarnessFilters extends BaseHarnessFilters {
  readonly id?: string | RegExp;
  readonly title?: string | RegExp;
}
