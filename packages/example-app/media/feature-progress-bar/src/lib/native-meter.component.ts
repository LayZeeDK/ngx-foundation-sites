import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FasMeterModule } from 'ngx-foundation-sites';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-progress-bar-native-meter',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <h2>Native Meter</h2>

    <p>
      For the extra adventurous developers out there, we also provide the
      <code>&lt;meter fas-meter&gt;</code> component extending the
      <code>&lt;meter&gt;</code> element. What's the difference?
      <code>&lt;progress&gt;</code>
      represents a value that changes over time, like storage capacity.
      <code>&lt;meter&gt;</code> represents a value that fluctuates around some
      optimum value.
    </p>

    <p>
      The meter automatically colors itself based on the current values, and the
      defined low, medium, and high ranges.
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter"
        target="_blank"
        rel="noopener"
        >Learn more about the mechanics of <code>&lt;meter&gt;</code> values</a
      >.
    </p>

    <meter
      fas-meter
      [value]="30"
      [min]="0"
      [low]="33"
      [high]="66"
      [optimum]="100"
      [max]="100"
    ></meter>
    <meter
      fas-meter
      [value]="50"
      [min]="0"
      [low]="33"
      [high]="66"
      [optimum]="100"
      [max]="100"
    ></meter>
    <meter
      fas-meter
      [value]="100"
      [min]="0"
      [low]="33"
      [high]="66"
      [optimum]="100"
      [max]="100"
    ></meter>
  `,
})
export class NativeMeterComponent {}

@NgModule({
  declarations: [NativeMeterComponent],
  exports: [NativeMeterComponent],
  imports: [FasMeterModule],
})
export class NativeMeterScam {}
