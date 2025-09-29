import type { BaseHarnessFilters } from '@angular/cdk/testing';

export interface FasMeterHarnessFilters extends BaseHarnessFilters {
  readonly value?: number;
}
