import * as loader from '@jscutlery/cypress-harness';
import {
  FasCardHarness,
  FasCardDividerHarness,
} from 'ngx-foundation-sites/testing';
import * as Card from './card.po';

export const getCard = () => loader.getHarness(FasCardHarness);
export const getCardDivider = () => loader.getHarness(FasCardDividerHarness);
export const navigateTo = () =>
  Card.navigateTo({
    storyName: 'Card Divider',
  });
