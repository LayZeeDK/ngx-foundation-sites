import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { render } from '@testing-library/angular';
import { FasTabsHarness } from 'ngx-foundation-sites/testing';

import { FasTabsModule } from './tabs.module';

describe('Collapsing tabs', () => {
  async function setup({ collapsing }: { readonly collapsing: boolean }) {
    const { fixture } = await render(
      `
      <fas-tabs [collapsing]="collapsing">
        <fas-tab id="panel1" title="Tab 1" [active]="true">
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
          collapsing,
        },
        imports: [FasTabsModule],
      }
    );

    const loader = TestbedHarnessEnvironment.loader(fixture);
    const tabs = await loader.getHarness(FasTabsHarness);
    const panel1 = await tabs.getPanel({ id: 'panel1' });
    const tab1 = await panel1.getTab();

    return { panel1, tab1 };
  }

  it(`
  Given collapsing tabs
  When the active tab is clicked
  Then the active panel collapses`, async () => {
    const { panel1, tab1 } = await setup({ collapsing: true });

    await tab1.selectTab();

    expect(await tab1.isActive()).toBe(false);
    expect(await panel1.getAriaHidden()).toBe(true);
  });

  it(`
  Given basic tabs
  When the active tab is clicked
  Then the active panel does not collapse`, async () => {
    const { panel1, tab1 } = await setup({ collapsing: false });

    await tab1.selectTab();

    expect(await tab1.isActive()).toBe(true);
    expect(await panel1.getAriaHidden()).toBe(false);
  });
});
