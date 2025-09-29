import * as loader from '@jscutlery/cypress-harness';
import { FasTabsHarness } from 'ngx-foundation-sites/testing';
import * as Tabs from './tabs.po';

export const findFirstTab = () =>
  cy.findByRole('tabpanel', { name: /^collapsing tab 1$/iu });
export const getAllTabs = () =>
  getTabstrip().getTabs({ title: /^collapsing tab \d+$/iu });
export const getFirstTab = () =>
  getTabstrip().getTab({ title: /^collapsing tab 1$/iu });
export const getTabstrip = () =>
  loader.getHarness(FasTabsHarness.with({ id: 'collapsing-tabs' }));
export const navigateTo = () =>
  Tabs.navigateTo({
    storyName: 'Collapsing Tabs',
  });
