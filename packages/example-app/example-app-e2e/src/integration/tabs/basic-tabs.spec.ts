import * as BasicTabs from '../../support/tabs/basic-tabs.po';
import * as Tabs from '../../support/tabs/tabs.po';

describe('Basic tabs', () => {
  beforeEach(() => {
    Tabs.navigateTo();
  });

  it('displays six basic tabs', () => {
    BasicTabs.getAllTabs().should('have.length', 6);
  });

  it('the first tab is active', () => {
    BasicTabs.getFirstTab().isActive().should('be.true');
  });
});
