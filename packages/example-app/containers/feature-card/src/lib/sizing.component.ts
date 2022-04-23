import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FasCardModule } from 'ngx-foundation-sites';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-card-sizing',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <h2>Sizing</h2>

    <p>
      You can either set the width of cards with custom css or add them into the
      Foundation grid.
    </p>

    <div class="grid-container">
      <div class="grid-x grid-margin-x small-up-2 medium-up-3">
        <div class="cell">
          <fas-card>
            <img src="/assets/img/generic/rectangle-1.jpg" />
            <fas-card-section>
              <h4>This is a row of cards.</h4>
              <p>This row of cards is embedded in an X-Y Block Grid.</p>
            </fas-card-section>
          </fas-card>
        </div>
        <div class="cell">
          <fas-card>
            <img src="/assets/img/generic/rectangle-1.jpg" />
            <fas-card-section>
              <h4>This is a card.</h4>
              <p>
                It has an easy to override visual style, and is appropriately
                subdued.
              </p>
            </fas-card-section>
          </fas-card>
        </div>
        <div class="cell">
          <fas-card>
            <img src="/assets/img/generic/rectangle-1.jpg" />
            <fas-card-section>
              <h4>This is a card.</h4>
              <p>
                It has an easy to override visual style, and is appropriately
                subdued.
              </p>
            </fas-card-section>
          </fas-card>
        </div>
      </div>
    </div>

    <div class="grid-x grid-margin-x small-up-2 medium-up-3">
      <div class="cell">
        <fas-card>
          <img src="/assets/img/generic/rectangle-1.jpg" />
          <fas-card-section>
            <h4>This is a row of cards.</h4>
            <p>This row of cards is embedded in a Flex Block Grid.</p>
          </fas-card-section>
        </fas-card>
      </div>
      <div class="cell">
        <fas-card>
          <img src="/assets/img/generic/rectangle-1.jpg" />
          <fas-card-section>
            <h4>This is a card.</h4>
            <p>
              It has an easy to override visual style, and is appropriately
              subdued.
            </p>
          </fas-card-section>
        </fas-card>
      </div>
      <div class="cell">
        <fas-card>
          <img src="/assets/img/generic/rectangle-1.jpg" />
          <fas-card-section>
            <h4>This is a card.</h4>
            <p>
              It has an easy to override visual style, and is appropriately
              subdued.
            </p>
          </fas-card-section>
        </fas-card>
      </div>
    </div>
  `,
})
export class SizingComponent {}

@NgModule({
  declarations: [SizingComponent],
  exports: [SizingComponent],
  imports: [FasCardModule],
})
export class SizingScam {}
