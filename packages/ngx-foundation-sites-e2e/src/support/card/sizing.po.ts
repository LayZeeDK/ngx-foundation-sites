import * as loader from '@jscutlery/cypress-harness';
import { FasCardHarness } from 'ngx-foundation-sites/testing';
import * as Card from './card.po';

export const getAllCards = () => loader.getAllHarnesses(FasCardHarness);
export const getFirstCard = () =>
  loader.getAllHarnesses(FasCardHarness).then(cards => cards[0]);
export const navigateTo = () =>
  Card.navigateTo({
    metaTitle: 'Sizing',
    storyName: 'XYBlockGrid',
  });
