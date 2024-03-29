import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { provideLocationMocks } from '@angular/common/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { render, screen } from '@testing-library/angular';
import { FasTabsHarness } from 'ngx-foundation-sites/testing';

import { FasTabComponent } from './tab.component';
import { fasTabsDeclarables } from './tabs-declarables';
import { FasTabsComponent } from './tabs.component';

describe('Tabs', () => {
  async function setup() {
    const { fixture } = await render(
      `
        <fas-tabs>
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
        imports: [fasTabsDeclarables],
        providers: [provideRouter([]), provideLocationMocks()],
      }
    );

    const tabsComponent = fixture.debugElement.query(
      By.directive(FasTabsComponent)
    ).componentInstance as FasTabsComponent;
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const tabs = await loader.getHarness(FasTabsHarness);
    const panel1 = await tabs.getPanel({ id: 'panel1' });
    const panel2 = await tabs.getPanel({ id: 'panel2' });
    const tab1 = await panel1.getTab();
    const tab2 = await panel2.getTab();

    return { panel1, panel2, tab1, tab2, tabsComponent };
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

  describe('Tab change', () => {
    it('opens the selected tab', async () => {
      const { panel2, tab2 } = await setup();

      await tab2.selectTab();

      expect(
        await screen.findByRole('tabpanel', { name: 'Tab 2' })
      ).toBeVisible();
      expect(await panel2.isActive()).toBe(true);
    });

    it('sets ARIA attributes for open tab', async () => {
      const { panel2, tab2 } = await setup();

      await tab2.selectTab();

      expect(await panel2.getAriaHidden()).toBe(false);
      expect(await tab2.getAriaSelected()).toBe(true);
    });

    it('hides the open tab', async () => {
      const { panel1, tab2 } = await setup();

      await tab2.selectTab();

      expect(await panel1.getAriaHidden()).toBe(true);
      expect(await panel1.isActive()).toBe(false);
    });

    it('sets ARIA attributes for closed tab', async () => {
      const { panel1, tab1, tab2 } = await setup();

      await tab2.selectTab();

      expect(await panel1.getAriaHidden()).toBe(true);
      expect(await tab1.getAriaSelected()).toBe(false);
    });

    it('fires "tabActiveChange" event with tab component as data', async () => {
      const { tab2, tabsComponent } = await setup();
      const tabActiveChangeSpy = jest.fn();

      const subscription =
        tabsComponent.tabActiveChange.subscribe(tabActiveChangeSpy);

      await tab2.selectTab();

      expect(tabActiveChangeSpy).toHaveBeenLastCalledWith(
        expect.any(FasTabComponent)
      );
      expect(tabActiveChangeSpy).toHaveBeenLastCalledWith(
        expect.objectContaining({
          active: true,
          id: 'panel2',
          title: 'Tab 2',
        } as FasTabComponent)
      );

      subscription.unsubscribe();
    });
  });
});
