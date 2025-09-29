import * as loader from '@jscutlery/cypress-harness';
import { FasMeterHarness } from 'ngx-foundation-sites/testing';
import * as Storybook from '../storybook.po';

export const getMeter = () => loader.getHarness(FasMeterHarness);
export const navigateTo = () =>
  Storybook.navigateTo({
    metaTitle: 'Media/Progress Bar',
    storyName: 'Native Meter',
  });
