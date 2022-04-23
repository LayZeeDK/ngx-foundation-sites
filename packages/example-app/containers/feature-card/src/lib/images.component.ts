import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FasCardModule } from 'ngx-foundation-sites';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-card-images',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <h3>Images</h3>

    <p>
      Images play nicely with cards. Simply include one outside of the
      <code>&lt;fas-card-section&gt;</code> component to span nicely to the
      edges. Or move the image inside the
      <code>&lt;fas-card-section&gt;</code> to have padding around the image.
    </p>

    <div class="grid-x grid-margin-x small-up-3">
      <div class="cell">
        <fas-card>
          <img src="/assets/img/generic/rectangle-1.jpg" />
          <fas-card-section>
            <p>This is a simple card with an image.</p>
          </fas-card-section>
        </fas-card>
      </div>
      <div class="cell">
        <fas-card>
          <fas-card-section>
            <img src="/assets/img/generic/rectangle-1.jpg" />
          </fas-card-section>
          <fas-card-section>
            <p>
              This is a simple card with an image inside a
              <code>&lt;fas-card-section&gt;</code>.
            </p>
          </fas-card-section>
        </fas-card>
      </div>
    </div>

    <div class="grid-x grid-margin-x small-up-3">
      <div class="cell">
        <fas-card>
          <fas-card-section>
            <p>Images work just fine below the content too!</p>
          </fas-card-section>
          <img src="/assets/img/generic/rectangle-1.jpg" />
        </fas-card>
      </div>
    </div>
  `,
})
export class ImagesComponent {}

@NgModule({
  declarations: [ImagesComponent],
  exports: [ImagesComponent],
  imports: [FasCardModule],
})
export class ImagesScam {}
