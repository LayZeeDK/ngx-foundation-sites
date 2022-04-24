import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FasProgressBarModule } from 'ngx-foundation-sites';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-progress-bar-basics',
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
      A progress bar has a single component: the container
      <code>&lt;fas-progress-bar&gt;</code> which contains the
      <code>.progress-meter</code> meter element. <code>role</code> and
      <code>aria-</code> attributes are provided to clarify the status of the
      bar:
    </p>

    <ul>
      <li><code>aria-valuemin</code>: Minimum value.</li>
      <li><code>aria-valuemax</code>: Maximum value.</li>
      <li><code>aria-valuenow</code>: Current value.</li>
    </ul>

    <p>
      <!-- TODO(LayZeeDK): Manage inside of the component -->
      If the value of the progress bar is not numeric, also add the attribute
      <code>aria-valuetext</code>, which should include a human-readable version
      of the bar's value.
    </p>

    <fas-progress-bar [max]="100" [min]="0" [value]="0"></fas-progress-bar>

    <p>
      <!-- TODO(LayZeeDK): Extract progress meter component -->
      Increase the <code>value</code> input property of the progress meter
      component to fill the progress bar.
    </p>

    <fas-progress-bar
      [max]="100"
      [min]="0"
      [value]="50"
      aria-valuetext="50 percent"
    ></fas-progress-bar>
  `,
})
export class BasicsComponent {}

@NgModule({
  declarations: [BasicsComponent],
  exports: [BasicsComponent],
  imports: [FasProgressBarModule],
})
export class BasicsScam {}