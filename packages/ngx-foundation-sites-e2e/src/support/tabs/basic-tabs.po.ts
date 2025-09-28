import * as loader from '@jscutlery/cypress-harness';
import { FasTabsHarness } from 'ngx-foundation-sites/testing';
import * as Tabs from './tabs.po';

export const getAllTabs = () =>
  getTabstrip().getTabs({ title: /^basic tab \d+$/ui });
export const getFirstTab = () =>
  getTabstrip().getTab({ title: /^basic tab 1$/ui });
export const getTabstrip = () =>
  loader.getHarness(FasTabsHarness.with({ id: 'basic-tabs' }));
export const navigateTo = () =>
  Tabs.navigateTo({
    storyName: 'Basics',
  });
