import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { BasicsScam } from './basics.component';

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
  `,
})
export class CardShellComponent {}

@NgModule({
  declarations: [CardShellComponent],
  imports: [BasicsScam],
})
export class CardShellScam {}
