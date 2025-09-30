import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { render } from '@testing-library/angular';
import { FasCardHarness } from 'ngx-foundation-sites/testing';
import { fasCardDeclarables } from './card-declarables';

describe('Sizing', () => {
  describe('X-Y Block Grid', () => {
    async function setup() {
      const { fixture } = await render(
        `
          <div class="grid-container">
            <div class="grid-x grid-margin-x small-up-2 medium-up-3">
              <div class="cell">
                <fas-card>
                  <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg">
                  <fas-card-section>
                    <h4>This is a row of cards.</h4>
                    <p>This row of cards is embedded in an X-Y Block Grid.</p>
                  </fas-card-section>
                </fas-card>
              </div>
              <div class="cell">
                <fas-card>
                  <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg">
                  <fas-card-section>
                    <h4>This is a card.</h4>
                    <p>It has an easy to override visual style, and is appropriately subdued.</p>
                  </fas-card-section>
                </fas-card>
              </div>
              <div class="cell">
                <fas-card>
                  <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg">
                  <fas-card-section>
                    <h4>This is a card.</h4>
                    <p>It has an easy to override visual style, and is appropriately subdued.</p>
                  </fas-card-section>
                </fas-card>
              </div>
            </div>
          </div>
        `,
        {
          imports: [fasCardDeclarables],
        }
      );

      const loader = TestbedHarnessEnvironment.loader(fixture);
      const cards = await loader.getAllHarnesses(FasCardHarness);
      const getFirstSectionText = (): Promise<string> =>
        cards[0].getSection().then(card => card.getTextContent());

      return { cards, getFirstSectionText };
    }

    it('supports multiple Cards', async () => {
      const { cards } = await setup();

      expect(cards.length).toBe(3);
    });

    it('projects section content', async () => {
      const { getFirstSectionText } = await setup();

      expect(await getFirstSectionText()).toContain('This is a row of cards.');
      expect(await getFirstSectionText()).toContain(
        'This row of cards is embedded in an X-Y Block Grid.'
      );
    });
  });

  describe('Flex Box Grid', () => {
    async function setup() {
      const { fixture } = await render(
        `
          <div class="grid-x grid-margin-x small-up-2 medium-up-3">
            <div class="cell">
              <fas-card>
                <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg">
                <fas-card-section>
                  <h4>This is a row of cards.</h4>
                  <p>This row of cards is embedded in an Flex Box Grid.</p>
                </fas-card-section>
              </fas-card>
            </div>
            <div class="cell">
              <fas-card>
                <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg">
                <fas-card-section>
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </fas-card-section>
              </fas-card>
            </div>
            <div class="cell">
              <fas-card>
                <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg">
                <fas-card-section>
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </fas-card-section>
              </fas-card>
            </div>
          </div>
        `,
        {
          imports: [fasCardDeclarables],
        }
      );

      const loader = TestbedHarnessEnvironment.loader(fixture);
      const cards = await loader.getAllHarnesses(FasCardHarness);
      const getFirstSectionText = (): Promise<string> =>
        cards[0].getSection().then(card => card.getTextContent());

      return { cards, getFirstSectionText };
    }

    it('supports multiple Cards', async () => {
      const { cards } = await setup();

      expect(cards.length).toBe(3);
    });

    it('projects section content', async () => {
      const { getFirstSectionText } = await setup();

      expect(await getFirstSectionText()).toContain('This is a row of cards.');
      expect(await getFirstSectionText()).toContain(
        'This row of cards is embedded in an Flex Box Grid.'
      );
    });
  });
});
