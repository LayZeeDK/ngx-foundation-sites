import {
  AsyncFactoryFn,
  ComponentHarness,
  HarnessPredicate,
  TestElement,
} from '@angular/cdk/testing';

import { FasTabHarnessFilters } from './tab-harness-filters';

export class FasTabHarness extends ComponentHarness {
  static hostSelector = '.tabs-title';

  #getLabel: AsyncFactoryFn<TestElement> = this.locatorFor('a');

  static with(options: FasTabHarnessFilters): HarnessPredicate<FasTabHarness> {
    return new HarnessPredicate(FasTabHarness, options)
      .addOption('ID', options.id, (harness, id) =>
        HarnessPredicate.stringMatches(harness.getId(), id)
      )
      .addOption('title', options.title, (harness, title) =>
        HarnessPredicate.stringMatches(harness.getTitle(), title)
      );
  }

  async #getPanel(): Promise<TestElement> {
    const panelId = await this.getAriaControls();

    return this.documentRootLocatorFactory().locatorFor(`#${panelId}`)();
  }

  async #isSelected(): Promise<boolean> {
    const ariaSelected = await this.getAriaSelected();

    return ariaSelected === 'true';
  }

  async activatePanel(): Promise<void> {
    const label = await this.#getLabel();

    label.click();
  }

  async getAriaControls(): Promise<string> {
    const label = await this.#getLabel();
    const maybePanelId = await label.getAttribute('aria-controls');

    if (!maybePanelId) {
      throw new Error('No aria-controls attribute');
    }

    const spaceBetweenPattern = /^.+[ ].+$/;

    if (spaceBetweenPattern.test(maybePanelId)) {
      throw new Error('Multiple tab panels not supported');
    }

    return maybePanelId;
  }

  async getAriaSelected(): Promise<'true' | 'false'> {
    const label = await this.#getLabel();
    const maybeAriaSelected = await label.getAttribute('aria-selected');

    if (
      maybeAriaSelected === null ||
      (maybeAriaSelected !== 'true' && maybeAriaSelected !== 'false')
    ) {
      throw new Error('No aria-selected attribute');
    }

    return maybeAriaSelected;
  }

  async getId(): Promise<string> {
    const label = await this.#getLabel();

    return label.getProperty('id');
  }

  async getLabelRole(): Promise<string | null> {
    const label = await this.#getLabel();

    return label.getAttribute('role');
  }

  async getRole(): Promise<string | null> {
    const host = await this.host();

    return host.getAttribute('role');
  }

  async getTitle(): Promise<string> {
    const label = await this.#getLabel();
    const text = await label.text();

    return text.trim();
  }

  async isActive(): Promise<boolean> {
    const host = await this.host();
    const [hasActiveClass, isSelected] = await Promise.all([
      host.hasClass('is-active'),
      this.#isSelected(),
    ]);

    return hasActiveClass && isSelected;
  }
}
