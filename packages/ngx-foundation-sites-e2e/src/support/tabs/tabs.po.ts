import * as loader from '@jscutlery/cypress-harness';
import { FasTabHarness } from 'ngx-foundation-sites/testing';
import * as Storybook from '../storybook.po';

const metaTitle = 'Containers/Tabs';

export interface NavigateToOptions {
  readonly metaTitle?: string;
  readonly storyName: string;
}

export const getAllTabs = () => loader.getAllHarnesses(FasTabHarness);
export const getTabWithTitle = (title: string) =>
  loader.getHarness(FasTabHarness.with({ title }));
export const navigateTo = (options: NavigateToOptions) =>
  Storybook.navigateTo({
    ...options,
    metaTitle:
      metaTitle +
      (options.metaTitle != null && options.metaTitle !== ''
        ? `/${options.metaTitle}`
        : ''),
  });
