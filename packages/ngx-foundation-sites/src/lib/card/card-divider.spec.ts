import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { render } from '@testing-library/angular';
import { FasCardHarness } from 'ngx-foundation-sites/testing';
import { fasCardDeclarables } from './card-declarables';

async function setup() {
  const { fixture } = await render(
    `
      <fas-card>
        <fas-card-divider>
          <h4>I'm featured</h4>
        </fas-card-divider>
        <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg" />
        <fas-card-section>
          <p>This card makes use of the <code>&lt;fas-card-divider&gt;</code> component.</p>
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

describe('Card Divider', () => {
  it('divider content is projected', async () => {
    const { divider } = await setup();

    expect(await divider.getTextContent()).toBe("I'm featured");
  });

  it('section content is projected', async () => {
    const { section } = await setup();

    expect(await section.getTextContent()).toBe(
      'This card makes use of the <fas-card-divider> component.'
    );
  });
});
