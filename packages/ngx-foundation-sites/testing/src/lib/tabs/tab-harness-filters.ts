import { BaseHarnessFilters } from '@angular/cdk/testing';

export interface FasTabHarnessFilters extends Readonly<BaseHarnessFilters> {
  readonly id?: string | RegExp;
  readonly title?: string | RegExp;
}
