import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FasTabPanelHarness } from './tab-panel/tab-panel.harness';
import { FasTabHarness } from './tab/tab.harness';
import { FasTabsModule } from './tabs.module';

@Component({
  template: `
    <fas-tabs>
        <fas-tab-panel id="panel1" title="Tab 1"
          [isActive]="true">
          <p>one</p>
          <p>Check me out! I'm a super cool Tab panel with text content!</p>
        </fas-tab-panel>

        <fas-tab-panel id="panel2" title="Tab 2">
          <p>two</p>
          <p>Check me out! I'm a super cool Tab panel with text content!</p>
        </fas-tab-panel>

        <fas-tab-panel id="panel3" title="Tab 3">
          <p>three</p>
          <p>Check me out! I'm a super cool Tab panel with text content!</p>
        </fas-tab-panel>
      </fas-tabs>
  `,
})
export class TabsTestHostComponent {}

describe('Tabs (component harnesses)', () => {
  async function tabFor(
    panelHarness: FasTabPanelHarness,
  ): Promise<FasTabHarness> {
    return harnessLoader.getHarness(
      FasTabHarness.with({ title: await panelHarness.getTitle() }));
  }

  let harnessLoader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsTestHostComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', pathMatch: 'full', component: TabsTestHostComponent },
        ]),
        FasTabsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    const hostFixture = TestBed.createComponent(TabsTestHostComponent);
    hostFixture.detectChanges();
    harnessLoader = TestbedHarnessEnvironment.loader(hostFixture);
  });

  describe('OnInit', () => {
    describe('sets ARIA attributes', async () => {
      let panel1: FasTabPanelHarness;
      let panel2: FasTabPanelHarness;
      let tab1: FasTabHarness;
      let tab2: FasTabHarness;

      beforeEach(async () => {
        panel1 = await harnessLoader.getHarness(
          FasTabPanelHarness.with({ id: 'panel1' }));
        panel2 = await harnessLoader.getHarness(
          FasTabPanelHarness.with({ id: 'panel2' }));
        tab1 = await tabFor(panel1);
        tab2 = await tabFor(panel2);
      });

      it('Panels', async () => {
        expect(await panel1.getRole()).toBe('tabpanel');
        expect(await panel1.getAriaLabelledBy()).toBe(await tab1.getId());
        expect(await panel1.getAriaHidden()).toBeNull();
        expect(await panel2.getAriaHidden()).toBe('true');
      });

      it('Links', async () => {
        expect(await tab1.getRole()).toBe('tab');
        expect(await tab1.getAriaControls()).toBe(await panel1.getId());
        expect(await tab1.getAriaSelected()).toBe('true');
        expect(await tab2.getAriaSelected()).toBe('false');
      });

      it('Tab list items', async () => {
        expect(await tab1.getHostRole()).toBe('presentation');
      });
    });
  });
});
