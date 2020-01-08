import { RouterTestingModule } from '@angular/router/testing';
import {
  createHostFactory,
  HostComponent,
  SpectatorHost,
} from '@ngneat/spectator';

import { TabPanelModule } from './tab-panel/tab-panel.module';
import { FasTabsComponent } from './tabs/tabs.component';

describe('TabsComponent', () => {
  const createHost = createHostFactory({
    component: FasTabsComponent,
    imports: [
      RouterTestingModule.withRoutes([
        { path: '', pathMatch: 'full', component: HostComponent },
      ]),
      TabPanelModule,
    ],
  });
  let host: SpectatorHost<FasTabsComponent>;

  beforeEach(() => {
    host = createHost(`
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
    `);
  })

  describe('OnInit', () => {
    describe('sets ARIA attributes', () => {
      let panel1: HTMLElement;
      let panel2: HTMLElement;
      let link1: HTMLAnchorElement;
      let link2: HTMLAnchorElement;
      let listItem1: HTMLLIElement;

      beforeEach(() => {
        panel1 = host.query('#panel1') as HTMLElement;
        panel2 = host.query('#panel2') as HTMLElement;
        link1 = host.query('[href="/#panel1') as HTMLAnchorElement;
        link2 = host.query('[href="/#panel2') as HTMLAnchorElement;
        listItem1 = link1.parentElement as HTMLLIElement;
      });

      it('Panels', () => {
        expect(panel1).toHaveAttribute('role', 'tabpanel');
        expect(panel1).toHaveAttribute('aria-labelledby', link1.id);
        expect(panel1.getAttribute('aria-hidden')).toBeNull();
        expect(panel2).toHaveAttribute('aria-hidden', 'true');
      });

      it('Links', () => {
        expect(link1).toHaveAttribute('role', 'tab');
        expect(link1).toHaveAttribute('aria-controls', panel1.id);
        expect(link1).toHaveAttribute('aria-selected', 'true');
        expect(link2).toHaveAttribute('aria-selected', 'false');
      });

      it('Tab list items', () => {
        expect(listItem1).toHaveAttribute('role', 'presentation');
      });
    });
  })

});
