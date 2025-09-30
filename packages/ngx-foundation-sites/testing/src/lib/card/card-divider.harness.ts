import { ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';

import type { FasCardDividerHarnessFilters } from './card-divider-harness-filters';

export class FasCardDividerHarness extends ComponentHarness {
  static hostSelector = 'fas-card-divider';

  static with(
    options: FasCardDividerHarnessFilters
  ): HarnessPredicate<FasCardDividerHarness> {
    return new HarnessPredicate(FasCardDividerHarness, options);
  }

  async getTextContent(): Promise<string> {
    const host = await this.host();
    const text = await host.text();

    return text.trim();
  }
}
