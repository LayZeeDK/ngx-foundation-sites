import { ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';

import type { FasProgressBarHarnessFilters } from './progress-bar-harness-filters';
import type { FasProgressMeterHarnessFilters } from './progress-meter-harness-filters';
import { FasProgressMeterHarness } from './progress-meter.harness';

export class FasProgressBarHarness extends ComponentHarness {
  static hostSelector = 'fas-progress-bar';

  static with(
    options: FasProgressBarHarnessFilters
  ): HarnessPredicate<FasProgressBarHarness> {
    return new HarnessPredicate(FasProgressBarHarness, options).addOption(
      'ID',
      options.id,
      (harness, id) => HarnessPredicate.stringMatches(harness.getId(), id)
    );
  }

  async getId(): Promise<string> {
    const host = await this.host();

    return host.getProperty('id');
  }

  async getRole(): Promise<string | null> {
    const host = await this.host();

    return host.getProperty('role');
  }

  async getMeter(
    filter: FasProgressMeterHarnessFilters = {}
  ): Promise<FasProgressMeterHarness> {
    const getMeter = this.locatorFor(FasProgressMeterHarness.with(filter));

    return getMeter();
  }

  async getMeters(
    filter: FasProgressMeterHarnessFilters = {}
  ): Promise<readonly FasProgressMeterHarness[]> {
    const getMeters = this.locatorForAll(FasProgressMeterHarness.with(filter));

    return getMeters();
  }

  async getValue(): Promise<number | null> {
    const host = await this.host();
    const valueAttr = await host.getAttribute('aria-valuenow');

    return valueAttr === null ? null : parseFloat(valueAttr);
  }

  async getMin(): Promise<number> {
    const host = await this.host();
    const minAttr = await host.getAttribute('aria-valuemin');

    return minAttr === null ? 0 : parseFloat(minAttr);
  }

  async getMax(): Promise<number> {
    const host = await this.host();
    const maxAttr = await host.getAttribute('aria-valuemax');
    const defaultMaxValue = 100;

    return maxAttr === null ? defaultMaxValue : parseFloat(maxAttr);
  }

  async getColor(): Promise<string | null> {
    const host = await this.host();
    const classList = await host.getAttribute('class');

    if (classList === null) return null;

    // Extract color from class names (e.g., "primary", "secondary", etc.)
    const colorMatch =
      /\b(?<color>primary|secondary|success|warning|alert)\b/u.exec(classList);
    return colorMatch?.groups?.['color'] ?? null;
  }
}
