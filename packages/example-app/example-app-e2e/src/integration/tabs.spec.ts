import * as Tabs from '../support/tabs.po';

describe('Tabs basics section', () => {
  beforeEach(() => {
    Tabs.navigateTo();
  });

  it('displays two tabs', () => {
    Tabs.getAllTabs().should('have.length', 2);
  });

  it('the first tab is active', () => {
    Tabs.getTabWithTitle('Tab 1').isActive().should('be.true');
  });
});
