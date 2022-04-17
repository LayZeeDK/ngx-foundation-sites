import { BaseHarnessFilters } from '@angular/cdk/testing';

export interface FasTabPanelHarnessFilters extends BaseHarnessFilters {
  readonly id?: string | RegExp;
  readonly title?: string | RegExp;
}
