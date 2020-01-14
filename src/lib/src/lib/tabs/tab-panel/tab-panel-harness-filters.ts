import { BaseHarnessFilters } from '@angular/cdk/testing';

export interface FasTabPanelFilters extends BaseHarnessFilters {
  readonly id?: string | RegExp;
  readonly title?: string | RegExp;
}
