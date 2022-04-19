import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FasTabsModule } from 'ngx-foundation-sites';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-tabs-vertical-tabs',
  styles: [
    `
      :host {
        display: block;
      }

      fas-tabs {
        display: grid;
        grid-template-columns: 1fr 3fr;
      }
    `,
  ],
  template: `
    <h2>Vertical Tabs</h2>

    <p>
      Set the <code>vertical</code> input property to a tabstrip to stack tabs
      vertically.
    </p>

    <fas-tabs [vertical]="true">
      <fas-tab id="panel1v" title="Vertical tab 1" [isActive]="true">
        <p>One</p>
        <p>Check me out! I'm a super cool Tab panel with text content!</p>
      </fas-tab>

      <fas-tab id="panel2v" title="Vertical tab 2">
        <p>Two</p>
        <img class="thumbnail" src="/assets/img/generic/rectangle-7.jpg" />
      </fas-tab>

      <fas-tab id="panel3v" title="Vertical tab 3">
        <p>Three</p>
        <p>Check me out! I'm a super cool Tab panel with text content!</p>
      </fas-tab>

      <fas-tab id="panel4v" title="Vertical tab 4">
        <p>Four</p>
        <img class="thumbnail" src="/assets/img/generic/rectangle-2.jpg" />
      </fas-tab>

      <fas-tab id="panel5v" title="Vertical tab 5">
        <p>Five</p>
        <p>Check me out! I'm a super cool Tab panel with text content!</p>
      </fas-tab>

      <fas-tab id="panel6v" title="Vertical tab 6">
        <p>Six</p>
        <img class="thumbnail" src="/assets/img/generic/rectangle-8.jpg" />
      </fas-tab>
    </fas-tabs>
  `,
})
export class VerticalTabsComponent {}

@NgModule({
  declarations: [VerticalTabsComponent],
  exports: [VerticalTabsComponent],
  imports: [FasTabsModule],
})
export class VerticalTabsScam {}
