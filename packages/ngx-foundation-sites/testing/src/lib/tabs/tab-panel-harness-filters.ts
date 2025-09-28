import { BaseHarnessFilters } from '@angular/cdk/testing';

export interface FasTabPanelHarnessFilters
  extends Readonly<BaseHarnessFilters> {
  readonly id?: RegExp | string;
  readonly title?: RegExp | string;
}
