import { ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';

import type { FasCardSectionHarnessFilters } from './card-section-harness-filters';

export class FasCardSectionHarness extends ComponentHarness {
  static hostSelector = 'fas-card-section';

  static with(
    options: FasCardSectionHarnessFilters
  ): HarnessPredicate<FasCardSectionHarness> {
    return new HarnessPredicate(FasCardSectionHarness, options);
  }

  async getTextContent(): Promise<string> {
    const host = await this.host();
    const text = await host.text();

    return text.trim();
  }
}
