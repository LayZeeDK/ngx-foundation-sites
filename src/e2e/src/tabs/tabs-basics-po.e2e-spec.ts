import { TabsPage } from './tabs.po';

describe('Tabs basics section (page object)', () => {
  let page: TabsPage;

  beforeEach(() => {
    page = new TabsPage();
    page.navigateTo();
  });

  it('displays two tabs', async () => {
    const tabs = await page.getAllTabs();

    expect(tabs.length).toBe(2);
  });

  it('the first tab is active', async () => {
    const firstTab = await page.getTabWithTitle('Tab 1');

    expect(await firstTab.isActive()).toBe(true);
  });
});
