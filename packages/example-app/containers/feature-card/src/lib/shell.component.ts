import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { BasicsScam } from './basics.component';
import { SizingScam } from './sizing.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-card-shell',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <h1>Card</h1>

    <p>Cards are a popular and flexible UI component.</p>

    <ex-card-basics></ex-card-basics>

    <ex-card-sizing></ex-card-sizing>
  `,
})
export class CardShellComponent {}

@NgModule({
  declarations: [CardShellComponent],
  imports: [BasicsScam, SizingScam],
})
export class CardShellScam {}
