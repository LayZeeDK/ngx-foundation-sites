import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { RouterTestingModule } from '@angular/router/testing';
import { render } from '@testing-library/angular';
import { FasTabsHarness } from 'ngx-foundation-sites/testing';

import { FasTabsModule } from './tabs.module';

describe('Tabs', () => {
  async function setup() {
    const { fixture } = await render(
      `
        <fas-tabs>
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
      { imports: [FasTabsModule, RouterTestingModule] }
    );

    const loader = TestbedHarnessEnvironment.loader(fixture);
    const tabs = await loader.getHarness(FasTabsHarness);
    const panel1 = await tabs.getPanel({ id: 'panel1' });
    const panel2 = await tabs.getPanel({ id: 'panel2' });
    const tab1 = await panel1.getTab();
    const tab2 = await panel2.getTab();

    return { panel1, panel2, tab1, tab2 };
  }

  describe('OnInit', () => {
    describe('sets ARIA attributes', () => {
      it('Panels', async () => {
        const { panel1, panel2, tab1 } = await setup();

        expect(await panel1.getRole()).toBe('tabpanel');
        expect(await panel1.getAriaLabelledBy()).toBe(await tab1.getId());
        expect(await panel1.getAriaHidden()).toBe(false);
        expect(await panel2.getAriaHidden()).toBe(true);
      });

      it('Links', async () => {
        const { panel1, tab1, tab2 } = await setup();

        expect(await tab1.getLabelRole()).toBe('tab');
        expect(await tab1.getAriaControls()).toBe(await panel1.getId());
        expect(await tab1.getAriaSelected()).toBe(true);
        expect(await tab2.getAriaSelected()).toBe(false);
      });

      it('Tab list items', async () => {
        const { tab1 } = await setup();

        expect(await tab1.getRole()).toBe('presentation');
      });
    });
  });
});
