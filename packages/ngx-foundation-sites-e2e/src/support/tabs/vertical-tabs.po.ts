import * as loader from '@jscutlery/cypress-harness';
import { FasTabsHarness } from 'ngx-foundation-sites/testing';
import * as Tabs from './tabs.po';

export const getAllTabs = () =>
  getTabstrip().getTabs({ title: /^vertical tab \d+$/i });
export const getFirstTab = () =>
  getTabstrip().getTab({ title: /^vertical tab 1$/i });
export const getTabstrip = () =>
  loader.getHarness(FasTabsHarness.with({ id: 'vertical-tabs' }));
export const navigateTo = () =>
  Tabs.navigateTo({
    storyName: 'Vertical Tabs',
  });
