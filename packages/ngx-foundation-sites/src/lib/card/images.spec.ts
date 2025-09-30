import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { render } from '@testing-library/angular';
import { FasCardHarness } from 'ngx-foundation-sites/testing';
import { fasCardDeclarables } from './card-declarables';

describe('Images', () => {
  describe('Simple', () => {
    async function setup() {
      const { fixture } = await render(
        `
          <!-- image has no padding -->
          <fas-card>
            <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg" />
            <fas-card-section>
              <p>This is a simple card with an image.</p>
            </fas-card-section>
          </fas-card>
        `,
        {
          imports: [fasCardDeclarables],
        }
      );

      const loader = TestbedHarnessEnvironment.loader(fixture);
      const card = await loader.getHarness(FasCardHarness);
      const section = await card.getSection();

      return { card, section };
    }

    it('projects section content', async () => {
      const { section } = await setup();

      expect(await section.getTextContent()).toBe(
        'This is a simple card with an image.'
      );
    });
  });

  describe('In section', () => {
    async function setup() {
      const { fixture } = await render(
        `
          <!-- image has padding -->
          <fas-card>
            <fas-card-section>
              <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg" />
            </fas-card-section>
            <fas-card-section>
              <p>This is a simple card with an image inside a <code>&lt;fas-card-section&gt;</code>.</p>
            </fas-card-section>
          </fas-card>
        `,
        {
          imports: [fasCardDeclarables],
        }
      );

      const loader = TestbedHarnessEnvironment.loader(fixture);
      const card = await loader.getHarness(FasCardHarness);
      const [imageSection, textSection] = await card.getSections();

      return { card, imageSection, textSection };
    }

    it('projects content for multiple sections', async () => {
      const { textSection } = await setup();

      expect(await textSection.getTextContent()).toBe(
        'This is a simple card with an image inside a <fas-card-section>.'
      );
    });
  });

  describe('Below content', () => {
    async function setup() {
      const { fixture } = await render(
        `
          <fas-card>
            <fas-card-section>
              <p>Images work just fine below the content too!</p>
            </fas-card-section>
            <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg" />
          </fas-card>
        `,
        {
          imports: [fasCardDeclarables],
        }
      );

      const loader = TestbedHarnessEnvironment.loader(fixture);
      const card = await loader.getHarness(FasCardHarness);
      const section = await card.getSection();

      return { card, section };
    }

    it('projects section content', async () => {
      const { section } = await setup();

      expect(await section.getTextContent()).toBe(
        'Images work just fine below the content too!'
      );
    });
  });
});
