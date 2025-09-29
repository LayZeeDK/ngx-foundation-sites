import * as loader from '@jscutlery/cypress-harness';
import { FasProgressHarness } from 'ngx-foundation-sites/testing';
import * as Storybook from '../storybook.po';

export const getProgress = () => loader.getHarness(FasProgressHarness);
export const navigateTo = () =>
  Storybook.navigateTo({
    metaTitle: 'Media/Progress Bar/Native Progress',
    storyName: 'Simple',
  });
