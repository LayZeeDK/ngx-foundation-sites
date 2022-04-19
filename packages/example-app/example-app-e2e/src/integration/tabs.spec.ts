import * as Tabs from '../support/tabs.po';

describe('Tabs Basics section', () => {
  beforeEach(() => {
    Tabs.navigateTo();
  });

  it('displays six tabs', () => {
    Tabs.getAllTabs().should('have.length', 6);
  });

  it('the first tab is active', () => {
    Tabs.getTabWithTitle('Tab 1').isActive().should('be.true');
  });
});
