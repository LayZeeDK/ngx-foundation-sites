import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { BasicsScam } from './basics.component';
import { VerticalTabsScam } from './vertical-tabs.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-tabs-shell',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <h1>Tabs</h1>

    <p>
      Tabs are elements that help you organize and navigate multiple documents
      in a single container. They can be used for switching between items in the
      container.
    </p>

    <ex-tabs-basics></ex-tabs-basics>

    <ex-tabs-vertical-tabs></ex-tabs-vertical-tabs>
  `,
})
export class TabsShellComponent {}

@NgModule({
  declarations: [TabsShellComponent],
  imports: [BasicsScam, VerticalTabsScam],
})
export class TabsShellScam {}
