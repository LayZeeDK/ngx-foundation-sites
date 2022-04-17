import { ComponentHarness } from '@angular/cdk/testing';

import { FasTabPanelHarnessFilters } from '../tab-panel/tab-panel-harness-filters';
import { FasTabPanelHarness } from '../tab-panel/tab-panel.harness';
import { FasTabHarnessFilters } from '../tab/tab-harness-filters';
import { FasTabHarness } from '../tab/tab.harness';

export class FasTabsHarness extends ComponentHarness {
  static hostSelector = 'fas-tabs';

  async getPanel(
    filter: FasTabPanelHarnessFilters = {},
  ): Promise<FasTabPanelHarness> {
    const getFilteredPanel = this.locatorFor(FasTabPanelHarness.with(filter));

    return getFilteredPanel();
  }

  async getTab(filter: FasTabHarnessFilters = {}): Promise<FasTabHarness> {
    const getFilteredTab = await this.locatorFor(FasTabHarness.with(filter));

    return getFilteredTab();
  }
}
