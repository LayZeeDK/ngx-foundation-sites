import * as loader from '@jscutlery/cypress-harness';
import { FasCardHarness } from 'ngx-foundation-sites/testing';

const metaTitle = 'Containers/Card';

export interface NavigateToOptions {
  readonly metaTitle?: string;
  readonly storyName: string;
}

export const getAllCards = () => loader.getAllHarnesses(FasCardHarness);
export const getCard = () => loader.getHarness(FasCardHarness);
export const navigateTo = (options: NavigateToOptions) => {
  cy.loadStory(metaTitle, options.storyName);
};
