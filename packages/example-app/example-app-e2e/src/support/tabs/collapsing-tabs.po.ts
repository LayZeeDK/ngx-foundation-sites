import * as loader from '@jscutlery/cypress-harness';
import { FasTabsHarness } from 'ngx-foundation-sites/testing';

export const findFirstTab = () =>
  cy.findByRole('tabpanel', { name: /^collapsing tab 1$/i });
export const getAllTabs = () =>
  getTabstrip().getTabs({ title: /^collapsing tab \d+$/i });
export const getFirstTab = () =>
  getTabstrip().getTab({ title: /^collapsing tab 1$/i });
export const getTabstrip = () =>
  loader.getHarness(FasTabsHarness.with({ id: 'collapsing-tabs' }));
