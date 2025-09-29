import { ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';

import type { FasProgressHarnessFilters } from './progress-harness-filters';

export class FasProgressHarness extends ComponentHarness {
  static hostSelector = 'progress[fas-progress]';

  static with(
    options: FasProgressHarnessFilters
  ): HarnessPredicate<FasProgressHarness> {
    return new HarnessPredicate(FasProgressHarness, options).addOption(
      'value',
      options.value,
      async (harness, value) => (await harness.getValue()) === value
    );
  }

  async getValue(): Promise<number | null> {
    const host = await this.host();
    const valueAttr: unknown = await host.getProperty('value');

    return typeof valueAttr === 'number' ? valueAttr : null;
  }

  async getMax(): Promise<number> {
    const host = await this.host();
    const maxAttr: unknown = await host.getProperty('max');

    return typeof maxAttr === 'number' ? maxAttr : 1;
  }

  async getColor(): Promise<string | null> {
    const host = await this.host();
    const classList = await host.getAttribute('class');

    if (classList === null) return null;

    // Extract color from class names
    const colorMatch = /\b(?<color>primary|secondary|success|warning|alert)\b/u.exec(
      classList
    );
    return colorMatch?.groups?.['color'] ?? null;
  }
}