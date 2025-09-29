import { ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';

import type { FasProgressMeterTextHarnessFilters } from './progress-meter-text-harness-filters';

export class FasProgressMeterTextHarness extends ComponentHarness {
  static hostSelector = 'fas-progress-meter-text';

  static with(
    options: FasProgressMeterTextHarnessFilters
  ): HarnessPredicate<FasProgressMeterTextHarness> {
    return new HarnessPredicate(FasProgressMeterTextHarness, options).addOption(
      'text',
      options.text,
      (harness, text) => HarnessPredicate.stringMatches(harness.getText(), text)
    );
  }

  async getText(): Promise<string> {
    const host = await this.host();
    const text = await host.text();

    return text.trim();
  }

  async getAccessibleText(): Promise<string | null> {
    const host = await this.host();

    return host.getAttribute('aria-label');
  }
}
