import {
  createHostComponentFactory,
  SpectatorWithHost,
} from '@netbasal/spectator';

import { FasTabsComponent } from './tabs';

describe('TabsComponent', () => {
  const createHost = createHostComponentFactory(FasTabsComponent);
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

  it('should display the host component title', () => {
    expect(host.query('.zippy__title')).toHaveText('Custom HostComponent');
  });
});
