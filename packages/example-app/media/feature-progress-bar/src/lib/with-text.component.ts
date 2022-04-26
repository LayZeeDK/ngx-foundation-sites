import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FasProgressBarModule } from 'ngx-foundation-sites';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-progress-bar-with-text',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <h2>With Text</h2>

    <p>
      You can add text inside the
      <code>&lt;progress-meter-text&gt;</code> component. The text you use in
      the meter is automatically used in the
      <code>aria-valuetext</code> attribute.
    </p>

    <fas-progress-bar aria-valuetext="25 percent">
      <fas-progress-meter [min]="0" [max]="100" [value]="25">
        <fas-progress-meter-text>25%</fas-progress-meter-text>
      </fas-progress-meter>
    </fas-progress-bar>
  `,
})
export class WithTextComponent {}

@NgModule({
  declarations: [WithTextComponent],
  exports: [WithTextComponent],
  imports: [FasProgressBarModule],
})
export class WithTextScam {}
