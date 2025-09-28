import { BaseHarnessFilters } from '@angular/cdk/testing';

export interface FasTabPanelHarnessFilters
  extends Readonly<BaseHarnessFilters> {
  readonly id?: string | RegExp;
  readonly title?: string | RegExp;
}
