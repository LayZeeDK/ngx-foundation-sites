import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { render } from '@testing-library/angular';
import { FasTabsHarness } from 'ngx-foundation-sites/testing';

import { FasTabsModule } from './tabs.module';

describe('Vertical tabs', () => {
  async function setup({ vertical }: { readonly vertical: boolean }) {
    const { fixture } = await render(
      `
      <fas-tabs [vertical]="vertical">
        <fas-tab id="panel1" title="Tab 1" active>
          <p>one</p>
          <p>Check me out! I'm a super cool Tab panel with text content!</p>
        </fas-tab>

        <fas-tab id="panel2" title="Tab 2">
          <p>two</p>
          <p>Check me out! I'm a super cool Tab panel with text content!</p>
        </fas-tab>

        <fas-tab id="panel3" title="Tab 3">
          <p>three</p>
          <p>Check me out! I'm a super cool Tab panel with text content!</p>
        </fas-tab>
      </fas-tabs>
    `,
      {
        componentProperties: {
          vertical,
        },
        imports: [FasTabsModule],
      }
    );

    const loader = TestbedHarnessEnvironment.loader(fixture);
    const tabs = await loader.getHarness(FasTabsHarness);

    return { tabs };
  }

  it('the tabstrip is laid out vertically when the "vertical" input is set', async () => {
    const { tabs } = await setup({ vertical: true });

    expect(await tabs.hasVerticalLayout()).toBe(true);
  });

  it('the tabstrip is laid out horizontally when the "vertical" input is cleared', async () => {
    const { tabs } = await setup({ vertical: false });

    expect(await tabs.hasVerticalLayout()).toBe(false);
  });
});
