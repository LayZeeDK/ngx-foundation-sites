import { ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';

import type { FasMeterHarnessFilters } from './meter-harness-filters';

export class FasMeterHarness extends ComponentHarness {
  static hostSelector = 'meter[fas-meter]';

  static with(
    options: FasMeterHarnessFilters
  ): HarnessPredicate<FasMeterHarness> {
    return new HarnessPredicate(FasMeterHarness, options).addOption(
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

  async getMin(): Promise<number> {
    const host = await this.host();
    const minAttr: unknown = await host.getProperty('min');

    return typeof minAttr === 'number' ? minAttr : 0;
  }

  async getHigh(): Promise<number | null> {
    const host = await this.host();
    const highAttr: unknown = await host.getProperty('high');

    return typeof highAttr === 'number' ? highAttr : null;
  }

  async getLow(): Promise<number | null> {
    const host = await this.host();
    const lowAttr: unknown = await host.getProperty('low');

    return typeof lowAttr === 'number' ? lowAttr : null;
  }

  async getOptimum(): Promise<number | null> {
    const host = await this.host();
    const optimumAttr: unknown = await host.getProperty('optimum');

    return typeof optimumAttr === 'number' ? optimumAttr : null;
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