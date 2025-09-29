import * as loader from '@jscutlery/cypress-harness';
import { FasProgressHarness } from 'ngx-foundation-sites/testing';
import * as ProgressBar from './progress-bar.po';

export const getProgress = () => loader.getHarness(FasProgressHarness);
export const navigateTo = () =>
  ProgressBar.navigateTo({
    metaTitle: 'Native Progress',
    storyName: 'Native Progress',
  });