import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FasProgressModule } from 'ngx-foundation-sites';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-progress-bar-native-progress',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <h2>Native Progress</h2>

    <p>
      As an alternative to our custom progress bar style, you can also opt to
      use the <code>&lt;progress fas-progress&gt;</code> component which extends
      the native <code>&lt;progress&gt;</code> element. It provides a more
      succinct way to create progress bars.
    </p>

    <progress fas-progress [max]="100" [value]="75"></progress>

    <p>
      The <code>&lt;progress fas-progress&gt;</code> component can be styled
      with the same <code>color</code> values: <code>secondary</code>,
      <code>success</code>, <code>warning</code>, and <code>alert</code>.
    </p>

    <progress
      fas-progress
      [max]="100"
      [value]="75"
      color="secondary"
    ></progress>
    <progress fas-progress [max]="100" [value]="75" color="success"></progress>
    <progress fas-progress [max]="100" [value]="75" color="warning"></progress>
    <progress fas-progress [max]="100" [value]="75" color="alert"></progress>
  `,
})
export class NativeProgressComponent {}

@NgModule({
  declarations: [NativeProgressComponent],
  exports: [NativeProgressComponent],
  imports: [FasProgressModule],
})
export class NativeProgressScam {}
