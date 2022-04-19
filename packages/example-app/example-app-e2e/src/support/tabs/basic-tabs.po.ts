import * as loader from '@jscutlery/cypress-harness';
import { FasTabHarness } from 'ngx-foundation-sites/testing';

export const getAllTabs = () =>
  loader.getAllHarnesses(FasTabHarness.with({ title: /^basic tab \d/i }));
export const getFirstTab = () =>
  loader.getHarness(FasTabHarness.with({ title: /^basic tab 1/i }));