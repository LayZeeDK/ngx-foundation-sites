import { RouterTestingModule } from '@angular/router/testing';
import {
  createHostComponentFactory,
  HostComponent,
  SpectatorWithHost,
} from '@netbasal/spectator';

import { TabModule } from './tab';
import { FasTabsComponent } from './tabs';

describe('TabsComponent', () => {
  const createHost = createHostComponentFactory({
    component: FasTabsComponent,
    imports: [
      RouterTestingModule.withRoutes([
        { path: '', pathMatch: 'full', component: HostComponent },
      ]),
      TabModule,
    ],
  });
  let host: SpectatorWithHost<FasTabsComponent>;

  beforeEach(() => {
    host = createHost(`
      <fas-tabs>
        <fas-tab id="panel1" title="Tab 1"
          [isActive]="true">
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
    `);
  })

  describe('OnInit', () => {
    it('sets ARIA attributes', () => {
      const panel1 = host.query('#panel1');
      const panel2 = host.query('#panel2');
      const link1 = host.query('[href="/#panel1');
      const link2 = host.query('[href="/#panel2');
      const listItem1 = link1.parentElement;

      // Panels
      expect(panel1).toHaveAttribute('role', 'tabpanel');
      expect(panel1).toHaveAttribute('aria-labelledby', link1.id);
      expect(panel1).toHaveAttribute('aria-hidden', undefined);
      expect(panel2).toHaveAttribute('aria-hidden', 'true');

      // Links
      expect(link1).toHaveAttribute('role', 'tab');
      expect(link1).toHaveAttribute('aria-controls', panel1.id);
      expect(link1).toHaveAttribute('aria-selected', 'true');
      expect(link2).toHaveAttribute('aria-selected', 'false');

      // Tab list items
      expect(listItem1).toHaveAttribute('role', 'presentation');
    });
  })

});
