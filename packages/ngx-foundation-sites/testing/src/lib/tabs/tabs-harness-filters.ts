import { BaseHarnessFilters } from '@angular/cdk/testing';

export interface FasTabsHarnessFilters extends Readonly<BaseHarnessFilters> {
  readonly id?: string | RegExp;
}
