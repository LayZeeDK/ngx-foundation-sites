import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { render } from '@testing-library/angular';
import { FasCardHarness } from 'ngx-foundation-sites/testing';
import { fasCardDeclarables } from './card-declarables';

async function setup() {
  const { fixture } = await render(
    `
      <fas-card>
        <fas-card-divider>This is a header</fas-card-divider>
        <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg" />
        <fas-card-section>
          <h4>This is a card.</h4>
          <p>It has an easy to override visual style, and is appropriately subdued.</p>
        </fas-card-section>
      </fas-card>
    `,
    {
      imports: [fasCardDeclarables],
    }
  );

  const loader = TestbedHarnessEnvironment.loader(fixture);
  const card = await loader.getHarness(FasCardHarness);
  const divider = await card.getDivider();
  const section = await card.getSection();

  return { card, divider, section };
}

describe('Card', () => {
  it('divider content is projected', async () => {
    const { divider } = await setup();

    expect(await divider.getTextContent()).toBe('This is a header');
  });

  it('section content is projected', async () => {
    const { section } = await setup();

    expect(await section.getTextContent()).toContain('This is a card.');
    expect(await section.getTextContent()).toContain(
      'It has an easy to override visual style, and is appropriately subdued.'
    );
  });
});
