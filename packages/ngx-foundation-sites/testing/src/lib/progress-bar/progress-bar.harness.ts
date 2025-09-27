import { ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';

import { FasProgressBarHarnessFilters } from './progress-bar-harness-filters';
import { FasProgressMeterHarnessFilters } from './progress-meter-harness-filters';
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

    return valueAttr ? parseFloat(valueAttr) : null;
  }

  async getMin(): Promise<number> {
    const host = await this.host();
    const minAttr = await host.getAttribute('aria-valuemin');

    return minAttr ? parseFloat(minAttr) : 0;
  }

  async getMax(): Promise<number> {
    const host = await this.host();
    const maxAttr = await host.getAttribute('aria-valuemax');

    return maxAttr ? parseFloat(maxAttr) : 100;
  }

  async getColor(): Promise<string | null> {
    const host = await this.host();
    const classList = await host.getAttribute('class');
    
    if (!classList) return null;

    // Extract color from class names (e.g., "primary", "secondary", etc.)
    const colorMatch = classList.match(/\b(primary|secondary|success|warning|alert)\b/);
    return colorMatch ? colorMatch[1] : null;
  }
}