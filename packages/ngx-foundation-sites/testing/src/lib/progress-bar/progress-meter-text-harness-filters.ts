import { BaseHarnessFilters } from '@angular/cdk/testing';

export interface FasProgressMeterTextHarnessFilters extends BaseHarnessFilters {
  readonly text?: string | RegExp;
  readonly accessibleText?: string | RegExp;
}