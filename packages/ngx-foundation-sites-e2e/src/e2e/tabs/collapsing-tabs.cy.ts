import * as CollapsingTabs from '../../support/tabs/collapsing-tabs.po';

describe('Collapsing tabs', () => {
  beforeEach(() => {
    CollapsingTabs.navigateTo();
  });

  it('displays 4 collapsing tabs', () => {
    CollapsingTabs.getAllTabs().should('have.length', 4);
  });

  it('the first tab is active', () => {
    CollapsingTabs.getFirstTab().isActive().should('be.true');
  });

  it(`
  When the active tab is clicked
  Then the active panel collapses`, () => {
    CollapsingTabs.getFirstTab().selectTab();

    CollapsingTabs.findFirstTab().should('not.exist');
  });
});
