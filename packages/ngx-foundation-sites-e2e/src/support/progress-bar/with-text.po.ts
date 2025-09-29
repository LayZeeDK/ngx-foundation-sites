import * as loader from '@jscutlery/cypress-harness';
import { FasProgressBarHarness } from 'ngx-foundation-sites/testing';
import * as ProgressBar from './progress-bar.po';

export const getProgressBar = () => loader.getHarness(FasProgressBarHarness);
export const navigateTo = (storyName: string) =>
  ProgressBar.navigateTo({
    metaTitle: 'With Text',
    storyName,
  });
