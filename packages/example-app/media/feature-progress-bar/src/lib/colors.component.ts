import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FasProgressBarModule } from 'ngx-foundation-sites';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-progress-bar-colors',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <h2>Colors</h2>

    <p>
      A progress bar can be styled with the <code>secondary</code>,
      <code>success</code>, <code>warning</code>, and <code>alert</code>
      <code>color</code> values.
    </p>

    <fas-progress-bar color="secondary" aria-valuetext="25 percent">
      <fas-progress-meter
        [min]="0"
        [max]="100"
        [value]="25"
      ></fas-progress-meter>
    </fas-progress-bar>

    <fas-progress-bar color="success">
      <fas-progress-meter
        [min]="0"
        [max]="100"
        [value]="50"
      ></fas-progress-meter>
    </fas-progress-bar>

    <fas-progress-bar color="warning">
      <fas-progress-meter
        [min]="0"
        [max]="100"
        [value]="50"
      ></fas-progress-meter>
    </fas-progress-bar>

    <fas-progress-bar color="alert">
      <fas-progress-meter
        [min]="0"
        [max]="100"
        [value]="75"
      ></fas-progress-meter>
    </fas-progress-bar>
  `,
})
export class ColorsComponent {}

@NgModule({
  declarations: [ColorsComponent],
  exports: [ColorsComponent],
  imports: [FasProgressBarModule],
})
export class ColorsScam {}
