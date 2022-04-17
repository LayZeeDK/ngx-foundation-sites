import { ProtractorHarnessEnvironment } from '@angular/cdk/testing/protractor';
import { browser, promise } from 'protractor';

import { FasTabHarness } from '../../../lib/src/lib/tabs/tab/tab.harness';

export class TabsPage {
  private harnessLoader = ProtractorHarnessEnvironment.loader();

  getAllTabs(): Promise<readonly FasTabHarness[]> {
    return this.harnessLoader.getAllHarnesses(FasTabHarness);
  }

  getTabWithTitle(title: string): Promise<FasTabHarness> {
    return this.harnessLoader.getHarness(FasTabHarness.with({ title }));
  }

  navigateTo(): promise.Promise<any> {
    return browser.get('/');
  }
}
