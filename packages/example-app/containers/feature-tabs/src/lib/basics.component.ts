import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FasTabsModule } from 'ngx-foundation-sites';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-tabs-basics',
  styles: [``],
  template: `
    <h2>Basics</h2>

    <fas-tabs>
      <fas-tab id="panel1" title="Tab 1" [isActive]="true">
        <p>
          Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu
          tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
          molestie magna non est bibendum non venenatis nisl tempor. Suspendisse
          dictum feugiat nisl ut dapibus.
        </p>
      </fas-tab>

      <fas-tab id="panel2" title="Tab 2">
        <p>
          Suspendisse dictum feugiat nisl ut dapibus. Vivamus hendrerit arcu sed
          erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non
          est bibendum non venenatis nisl tempor. Sed auctor neque eu tellus
          rhoncus ut eleifend nibh porttitor.
        </p>
      </fas-tab>
    </fas-tabs>
  `,
})
export class TabsBasicsComponent {}

@NgModule({
  declarations: [TabsBasicsComponent],
  exports: [TabsBasicsComponent],
  imports: [FasTabsModule],
})
export class TabsBasicsScam {}
