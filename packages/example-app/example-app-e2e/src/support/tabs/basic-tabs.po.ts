import * as loader from '@jscutlery/cypress-harness';
import { FasTabsHarness } from 'ngx-foundation-sites/testing';

export const getAllTabs = () =>
  getTabstrip().getTabs({ title: /^basic tab \d+/i });
export const getFirstTab = () =>
  getTabstrip().getTab({ title: /^basic tab 1$/i });
export const getTabstrip = () =>
  loader.getHarness(FasTabsHarness.with({ id: 'basic-tabs' }));
