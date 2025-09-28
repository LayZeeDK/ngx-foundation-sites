import { BaseHarnessFilters } from '@angular/cdk/testing';

export interface FasTabHarnessFilters extends Readonly<BaseHarnessFilters> {
  readonly id?: RegExp | string;
  readonly title?: RegExp | string;
}
