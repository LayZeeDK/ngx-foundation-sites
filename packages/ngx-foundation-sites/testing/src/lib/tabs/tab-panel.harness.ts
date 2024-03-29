import {
  ComponentHarness,
  HarnessPredicate,
  TestElement,
} from '@angular/cdk/testing';

import { coerceBooleanProperty } from '../util-coercion/coerce-boolean-property';
import { FasTabPanelHarnessFilters } from './tab-panel-harness-filters';
import { FasTabHarness } from './tab.harness';

export class FasTabPanelHarness extends ComponentHarness {
  static hostSelector = 'fas-tab';

  static with(
    options: FasTabPanelHarnessFilters
  ): HarnessPredicate<FasTabPanelHarness> {
    return new HarnessPredicate(FasTabPanelHarness, options)
      .addOption('ID', options.id, (harness, id) =>
        HarnessPredicate.stringMatches(harness.getId(), id)
      )
      .addOption('title', options.title, (harness, title) =>
        HarnessPredicate.stringMatches(harness.getTitle(), title)
      );
  }

  async #getTabElement(): Promise<TestElement> {
    const tabId = await this.getAriaLabelledBy();

    return this.documentRootLocatorFactory().locatorFor(`#${tabId}`)();
  }

  async activate(): Promise<void> {
    const label = await this.#getTabElement();

    label.click();
  }

  async getAriaLabelledBy(): Promise<string> {
    const host = await this.host();
    const maybeLabelId = await host.getAttribute('aria-labelledby');

    if (!maybeLabelId) {
      throw new Error('No aria-labelledby attribute');
    }

    return maybeLabelId;
  }

  async getAriaHidden(): Promise<boolean> {
    const host = await this.host();
    const ariaHiddenAttribute = await host.getAttribute('aria-hidden');

    return coerceBooleanProperty(ariaHiddenAttribute);
  }

  async getId(): Promise<string> {
    const host = await this.host();

    return host.getProperty('id');
  }

  async getRole(): Promise<string> {
    const host = await this.host();
    const maybeRole = await host.getAttribute('role');

    if (maybeRole === null) {
      throw new Error('No role attribute');
    }

    return maybeRole;
  }

  async getTab(): Promise<FasTabHarness> {
    const tabId = await this.getAriaLabelledBy();
    const getFilteredTab = this.documentRootLocatorFactory().locatorFor(
      FasTabHarness.with({ id: tabId })
    );

    return getFilteredTab();
  }

  async getTextContent(): Promise<string> {
    const host = await this.host();
    const text = await host.text();

    return text.trim();
  }

  async getTitle(): Promise<string> {
    const label = await this.#getTabElement();
    const title = await label.text();

    return title.trim();
  }

  async isActive(): Promise<boolean> {
    const host = await this.host();
    const [hasActiveClass, isHidden] = await Promise.all([
      host.hasClass('is-active'),
      this.getAriaHidden(),
    ]);

    return hasActiveClass && !isHidden;
  }
}
