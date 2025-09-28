import * as loader from '@jscutlery/cypress-harness';
import { FasCardHarness } from 'ngx-foundation-sites/testing';
import * as Card from './card.po';

export const getCard = () => loader.getHarness(FasCardHarness);
export const navigateTo = () =>
  Card.navigateTo({
    metaTitle: 'Images',
    storyName: 'Simple',
  });
