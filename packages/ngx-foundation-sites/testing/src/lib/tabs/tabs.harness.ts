import { ComponentHarness } from '@angular/cdk/testing';

import { FasTabHarnessFilters } from './tab-harness-filters';
import { FasTabPanelHarnessFilters } from './tab-panel-harness-filters';
import { FasTabPanelHarness } from './tab-panel.harness';
import { FasTabHarness } from './tab.harness';

export class FasTabsHarness extends ComponentHarness {
  static hostSelector = 'fas-tabs';

  async getPanel(
    filter: FasTabPanelHarnessFilters = {}
  ): Promise<FasTabPanelHarness> {
    const getFilteredPanel = this.locatorFor(FasTabPanelHarness.with(filter));

    return getFilteredPanel();
  }

  getTab(filter: FasTabHarnessFilters = {}): Promise<FasTabHarness> {
    const getFilteredTab = this.locatorFor(FasTabHarness.with(filter));

    return getFilteredTab();
  }
}
