import * as loader from '@jscutlery/cypress-harness';
import { FasTabHarness } from 'ngx-foundation-sites/testing';

export const getAllTabs = () => loader.getAllHarnesses(FasTabHarness);
export const getTabWithTitle = (title: string) =>
  loader.getHarness(FasTabHarness.with({ title }));
export const navigateTo = () => cy.visit('/');
