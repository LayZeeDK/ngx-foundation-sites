import { ProtractorHarnessEnvironment } from '@angular/cdk/testing/protractor';
import { browser } from 'protractor';

import { FasTabHarness } from '../../../lib/src/lib/tabs/tab/tab.harness';

export class TabsPage {
  private harnessLoader = ProtractorHarnessEnvironment.loader();

  getAllTabs(): Promise<readonly FasTabHarness[]> {
    return this.harnessLoader.getAllHarnesses(FasTabHarness);
  }

  getTabWithTitle(title: string): Promise<FasTabHarness> {
    return this.harnessLoader.getHarness(FasTabHarness.with({ title }));
  }

  navigateTo() {
    return browser.get('/');
  }
}
