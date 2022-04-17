import { HarnessLoader } from '@angular/cdk/testing';
import { ProtractorHarnessEnvironment } from '@angular/cdk/testing/protractor';
import { browser } from 'protractor';

import { FasTabHarness } from '../../../lib/src/lib/tabs/tab/tab.harness';

describe('Tabs basics section', () => {
  let harnessLoader: HarnessLoader;

  beforeEach(() => {
    browser.get('/');
    harnessLoader = ProtractorHarnessEnvironment.loader();
  });

  it('displays two tabs', async () => {
    const tabs = await harnessLoader.getAllHarnesses(FasTabHarness);

    expect(tabs.length).toBe(2);
  });

  it('the first tab is active', async () => {
    const firstTab = await harnessLoader.getHarness(
      FasTabHarness.with({ title: 'Tab 1' }),
    );

    expect(await firstTab.isActive()).toBe(true);
  });
});
