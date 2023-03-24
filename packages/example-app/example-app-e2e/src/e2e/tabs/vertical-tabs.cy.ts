import * as Tabs from '../../support/tabs/tabs.po';
import * as VerticalTabs from '../../support/tabs/vertical-tabs.po';

describe('Vertical tabs', () => {
  beforeEach(() => {
    Tabs.navigateTo();
  });

  it('displays six basic tabs', () => {
    VerticalTabs.getAllTabs().should('have.length', 6);
  });

  it('the first tab is active', () => {
    VerticalTabs.getFirstTab().isActive().should('be.true');
  });

  it('the tabstrip is laid out vertically', () => {
    VerticalTabs.getTabstrip().hasVerticalLayout().should('be.true');
  });
});
