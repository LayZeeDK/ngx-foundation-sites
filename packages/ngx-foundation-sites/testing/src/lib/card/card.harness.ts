import { ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';
import { FasCardDividerHarness } from './card-divider.harness';
import type { FasCardHarnessFilters } from './card-harness-filters';
import { FasCardSectionHarness } from './card-section.harness';

export class FasCardHarness extends ComponentHarness {
  static hostSelector = 'fas-card';

  static with(
    options: FasCardHarnessFilters
  ): HarnessPredicate<FasCardHarness> {
    return new HarnessPredicate(FasCardHarness, options);
  }

  async getSections(
    filter: FasCardHarnessFilters = {}
  ): Promise<readonly FasCardSectionHarness[]> {
    const getFilteredSections = this.locatorForAll(
      FasCardSectionHarness.with(filter)
    );

    return getFilteredSections();
  }

  async getSection(
    filter: FasCardHarnessFilters = {}
  ): Promise<FasCardSectionHarness> {
    const getFilteredSection = this.locatorFor(
      FasCardSectionHarness.with(filter)
    );

    return getFilteredSection();
  }

  async getDivider(
    filter: FasCardHarnessFilters = {}
  ): Promise<FasCardDividerHarness> {
    const getFilteredDivider = this.locatorFor(
      FasCardDividerHarness.with(filter)
    );

    return getFilteredDivider();
  }

  async getDividers(
    filter: FasCardHarnessFilters = {}
  ): Promise<readonly FasCardDividerHarness[]> {
    const getFilteredDividers = this.locatorForAll(
      FasCardDividerHarness.with(filter)
    );

    return getFilteredDividers();
  }

  async getTextContent(): Promise<string> {
    const host = await this.host();
    const text = await host.text();

    return text.trim();
  }
}
