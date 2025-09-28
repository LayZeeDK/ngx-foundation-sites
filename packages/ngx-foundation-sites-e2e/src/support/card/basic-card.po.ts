import * as loader from '@jscutlery/cypress-harness';
import {
  FasCardHarness,
  FasCardSectionHarness,
  FasCardDividerHarness,
} from 'ngx-foundation-sites/testing';
import * as Card from './card.po';
import * as Storybook from '../storybook.po';

export const getCard = () => loader.getHarness(FasCardHarness);
const getCardHost = () => cy.get(FasCardHarness.hostSelector);
export const getCardSection = () => loader.getHarness(FasCardSectionHarness);
export const getCardSectionHost = () =>
  cy.get(FasCardSectionHarness.hostSelector);
export const getCardDivider = () => loader.getHarness(FasCardDividerHarness);
export const getImage = () => getCardHost().findByRole('img');
export const setDividerText = (text: string) =>
  Storybook.setControl('dividerText', text);
export const setImageSrcUrl = (url: string) =>
  Storybook.setControl('imageSrcUrl', url);
export const setSectionContentMarkdown = (markdown: string) =>
  Storybook.setControl('sectionContentMarkdown', markdown);
export const navigateTo = () =>
  Card.navigateTo({
    storyName: 'Basics',
  });
