import type { AsyncFactoryFn, TestElement } from '@angular/cdk/testing';
import { ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';

import type { FasTabHarnessFilters } from './tab-harness-filters';
import type { FasTabPanelHarnessFilters } from './tab-panel-harness-filters';
import { FasTabPanelHarness } from './tab-panel.harness';
import { FasTabHarness } from './tab.harness';
import type { FasTabsHarnessFilters } from './tabs-harness-filters';

export class FasTabsHarness extends ComponentHarness {
  static hostSelector = 'fas-tabs';

  #getTabs: AsyncFactoryFn<TestElement> = this.locatorFor('.fas-tabs__tabs');

  static with(
    options: FasTabsHarnessFilters
  ): HarnessPredicate<FasTabsHarness> {
    return new HarnessPredicate(FasTabsHarness, options).addOption(
      'ID',
      options.id,
      (harness, id) => HarnessPredicate.stringMatches(harness.getId(), id)
    );
  }

  async getPanel(
    filter: FasTabPanelHarnessFilters = {}
  ): Promise<FasTabPanelHarness> {
    const getFilteredPanel = this.locatorFor(FasTabPanelHarness.with(filter));

    return getFilteredPanel();
  }

  async getId(): Promise<string> {
    const host = await this.host();

    return host.getProperty('id');
  }

  getTab(filter: FasTabHarnessFilters): Promise<FasTabHarness> {
    const getFilteredTab = this.locatorFor(FasTabHarness.with(filter));

    return getFilteredTab();
  }

  getTabs(
    filter: FasTabHarnessFilters = {}
  ): Promise<readonly FasTabHarness[]> {
    const getFilteredTabs = this.locatorForAll(FasTabHarness.with(filter));

    return getFilteredTabs();
  }

  /**
   * Determine whether or not the tabstrip is laid out vertically. By default,
   * it is laid out horizontally.
   */
  async hasVerticalLayout(): Promise<boolean> {
    const tabs = await this.#getTabs();

    return tabs.hasClass('vertical');
  }
}
