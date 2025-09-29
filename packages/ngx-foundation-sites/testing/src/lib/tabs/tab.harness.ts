import type { AsyncFactoryFn, TestElement } from '@angular/cdk/testing';
import { ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';

import { coerceBooleanProperty } from '../util-coercion/coerce-boolean-property';
import type { FasTabHarnessFilters } from './tab-harness-filters';

export class FasTabHarness extends ComponentHarness {
  static hostSelector = '.fas-tabs__tabs-title';

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

  // eslint-disable-next-line no-unused-private-class-members -- Keeep for future use
  async #getPanel(): Promise<TestElement> {
    const panelId = await this.getAriaControls();

    return this.documentRootLocatorFactory().locatorFor(`#${panelId}`)();
  }

  async getAriaControls(): Promise<string> {
    const label = await this.#getLabel();
    const maybePanelId = await label.getAttribute('aria-controls');

    if (maybePanelId === null || maybePanelId === '') {
      throw new Error('No aria-controls attribute');
    }

    const spaceBetweenPattern = /^.+[ ].+$/u;

    if (spaceBetweenPattern.test(maybePanelId)) {
      throw new Error('Multiple tab panels not supported');
    }

    return maybePanelId;
  }

  async getAriaSelected(): Promise<boolean> {
    const label = await this.#getLabel();
    const ariaSelectedAttribute = await label.getAttribute('aria-selected');

    return coerceBooleanProperty(ariaSelectedAttribute);
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
      this.getAriaSelected(),
    ]);

    return hasActiveClass && isSelected;
  }

  async selectTab(): Promise<void> {
    const label = await this.#getLabel();

    return label.click();
  }
}
