import * as loader from '@jscutlery/cypress-harness';
import { FasProgressBarHarness } from 'ngx-foundation-sites/testing';
import * as Storybook from '../storybook.po';

const metaTitle = 'Media/Progress Bar';

export interface NavigateToOptions {
  readonly metaTitle?: string;
  readonly storyName: string;
}

export const getProgressBar = () => loader.getHarness(FasProgressBarHarness);
export const getAllProgressBars = () =>
  loader.getAllHarnesses(FasProgressBarHarness);
export const getProgressBarWithId = (id: string) =>
  loader.getHarness(FasProgressBarHarness.with({ id }));
export const navigateTo = (options: NavigateToOptions) =>
  Storybook.navigateTo({
    ...options,
    metaTitle:
      metaTitle +
      (typeof options.metaTitle === 'string' ? `/${options.metaTitle}` : ''),
  });
