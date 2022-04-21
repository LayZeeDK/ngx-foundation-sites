import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FasTabsModule } from 'ngx-foundation-sites';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-tabs-collapsing-tabs',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <h2>Collapsing Tabs</h2>

    <p>
      Set the <code>vertical</code> input property to a tabstrip to stack tabs
      vertically.
    </p>

    <fas-tabs id="collapsing-tabs" [collapsing]="true">
      <fas-tab id="panel1c" title="Collapsing tab 1" [isActive]="true">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </fas-tab>

      <fas-tab id="panel2c" title="Collapsing tab 2">
        <p>
          Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu
          tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
          molestie magna non est bibendum non venenatis nisl tempor. Suspendisse
          dictum feugiat nisl ut dapibus.
        </p>
      </fas-tab>

      <fas-tab id="panel3c" title="Collapsing tab 3">
        <img class="thumbnail" src="/assets/img/generic/rectangle-3.jpg" />
      </fas-tab>

      <fas-tab id="panel4c" title="Collapsing tab 4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </fas-tab>
    </fas-tabs>
  `,
})
export class CollapsingTabsComponent {}

@NgModule({
  declarations: [CollapsingTabsComponent],
  exports: [CollapsingTabsComponent],
  imports: [FasTabsModule],
})
export class CollapsingTabsScam {}
