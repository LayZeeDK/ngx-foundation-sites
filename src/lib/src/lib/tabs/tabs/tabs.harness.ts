import { ComponentHarness } from '@angular/cdk/testing';

import {
  FasTabPanelFilters,
  FasTabPanelHarness,
} from '../tab-panel/tab-panel.harness';
import { FasTabFilters, FasTabHarness } from '../tab/tab.harness';

export class FasTabsHarness extends ComponentHarness {
  static hostSelector = 'fas-tabs';

  async getPanels(
    filters: FasTabPanelFilters = {},
  ): Promise<readonly FasTabPanelHarness[]> {
    const getFilteredPanels = await this.locatorForAll(
      FasTabPanelHarness.with(filters));

    return getFilteredPanels();
  }

  async getTabs(
    filters: FasTabFilters = {},
  ): Promise<readonly FasTabHarness[]> {
    const getFilteredTabs = await this.locatorForAll(
      FasTabHarness.with(filters));

    return getFilteredTabs();
  }
}
