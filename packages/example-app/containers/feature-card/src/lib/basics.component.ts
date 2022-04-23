import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FasCardModule } from 'ngx-foundation-sites';

import { CardDividerScam } from './card-divider.component';
import { ImagesScam } from './images.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-card-basics',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <h2>Basics</h2>

    <p>
      A card is an element which you can put any kind of content inside. Make
      sure you wrap your content in a <code>&lt;fas-card-section&gt;</code>
      element in order to achieve the traditional card look.
    </p>

    <p>
      A card container has no padding, allowing you to place full-bleed images
      inside. Use the <code>&lt;fas-card-divider&gt;</code> and
      <code>&lt;fas-card-section&gt;</code> components to sub-divide a card.
    </p>

    <fas-card [style.width.px]="300">
      <fas-card-divider> This is a header </fas-card-divider>
      <img src="/assets/img/generic/rectangle-1.jpg" />
      <fas-card-section>
        <h4>This is a card.</h4>
        <p>
          It has an easy to override visual style, and is appropriately subdued.
        </p>
      </fas-card-section>
    </fas-card>

    <ex-card-divider></ex-card-divider>

    <ex-card-images></ex-card-images>
  `,
})
export class BasicsComponent {}

@NgModule({
  declarations: [BasicsComponent],
  exports: [BasicsComponent],
  imports: [FasCardModule, CardDividerScam, ImagesScam],
})
export class BasicsScam {}
