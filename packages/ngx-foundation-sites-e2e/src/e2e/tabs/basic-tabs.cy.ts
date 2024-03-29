import * as BasicTabs from '../../support/tabs/basic-tabs.po';

describe('Basic tabs', () => {
  beforeEach(() => {
    BasicTabs.navigateTo();
  });

  it('displays six basic tabs', () => {
    BasicTabs.getAllTabs().should('have.length', 6);
  });

  it('the first tab is active', () => {
    BasicTabs.getFirstTab().isActive().should('be.true');
  });

  it('the tabstrip is laid out horizontally', () => {
    BasicTabs.getTabstrip().hasVerticalLayout().should('be.false');
  });
});
