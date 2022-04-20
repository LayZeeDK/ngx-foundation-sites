import { BaseHarnessFilters } from '@angular/cdk/testing';

export interface FasTabsHarnessFilters extends BaseHarnessFilters {
  readonly id?: string | RegExp;
}
