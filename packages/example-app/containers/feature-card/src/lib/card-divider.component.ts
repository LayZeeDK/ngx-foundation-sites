import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FasCardModule } from 'ngx-foundation-sites';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-card-divider',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <h3>Card Divider</h3>

    <p>
      You can also include a <code>&lt;fas-card-divider&gt;</code> component as
      a title, footer or to break up content.
    </p>

    <fas-card [style.width.px]="300">
      <fas-card-divider>
        <h4>I'm featured</h4>
      </fas-card-divider>
      <img src="/assets/img/generic/rectangle-1.jpg" />
      <fas-card-section>
        <p>
          This card makes use of the
          <code>&lt;fas-card-divider&gt;</code> component.
        </p>
      </fas-card-section>
    </fas-card>
  `,
})
export class CardDividerComponent {}

@NgModule({
  declarations: [CardDividerComponent],
  exports: [CardDividerComponent],
  imports: [FasCardModule],
})
export class CardDividerScam {}
