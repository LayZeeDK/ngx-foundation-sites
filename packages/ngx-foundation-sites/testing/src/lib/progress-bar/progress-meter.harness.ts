import type { TestElement } from '@angular/cdk/testing';
import { ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';

import type { FasProgressMeterHarnessFilters } from './progress-meter-harness-filters';
import type { FasProgressMeterTextHarnessFilters } from './progress-meter-text-harness-filters';
import { FasProgressMeterTextHarness } from './progress-meter-text.harness';

export class FasProgressMeterHarness extends ComponentHarness {
  static hostSelector = 'fas-progress-meter';

  static with(
    options: FasProgressMeterHarnessFilters
  ): HarnessPredicate<FasProgressMeterHarness> {
    return new HarnessPredicate(FasProgressMeterHarness, options).addOption(
      'value',
      options.value,
      async (harness, value) => (await harness.getValue()) === value
    );
  }

  async getMeterText(
    filter: FasProgressMeterTextHarnessFilters = {}
  ): Promise<FasProgressMeterTextHarness | null> {
    const textElements = await this.locatorForOptional(
      FasProgressMeterTextHarness.with(filter)
    )();

    return textElements;
  }

  async #getProgressBar(): Promise<TestElement> {
    // Find the parent progress bar element
    return this.documentRootLocatorFactory().locatorFor(
      'fas-progress-bar:has(fas-progress-meter)'
    )();
  }

  async getValue(): Promise<number | null> {
    // Value is set via aria-valuenow on the parent fas-progress-bar element
    const progressBar = await this.#getProgressBar();
    const valueAttr = await progressBar.getAttribute('aria-valuenow');

    return valueAttr === null ? null : parseFloat(valueAttr);
  }

  async getMin(): Promise<number> {
    // Min is set via aria-valuemin on the parent fas-progress-bar element
    const progressBar = await this.#getProgressBar();
    const minAttr = await progressBar.getAttribute('aria-valuemin');

    return minAttr === null ? 0 : parseFloat(minAttr);
  }

  async getMax(): Promise<number> {
    // Max is set via aria-valuemax on the parent fas-progress-bar element
    const progressBar = await this.#getProgressBar();
    const maxAttr = await progressBar.getAttribute('aria-valuemax');
    const defaultMaxValue = 100;

    return maxAttr === null ? defaultMaxValue : parseFloat(maxAttr);
  }

  async getStyle(): Promise<string | null> {
    const host = await this.host();

    return host.getAttribute('style');
  }

  async getWidthPercentage(): Promise<number | null> {
    const style = await this.getStyle();
    if (style === null) return null;

    const widthMatch = /width:\s*(?<percentage>\d+(?:\.\d+)?)%/u.exec(style);
    const percentageValue = widthMatch?.groups?.['percentage'];

    return typeof percentageValue === 'string'
      ? parseFloat(percentageValue)
      : null;
  }
}
