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
      A progress bar has two single components: the container
      <code>&lt;fas-progress-bar&gt;</code>, and the meter
      <code>&lt;fas-progress-meter&gt;</code>. The <code>role</code> and
      <code>aria-</code> attributes are automatically set to clarify the status
      of the bar:
    </p>

    <ul>
      <li><code>aria-valuemin</code>: Minimum value.</li>
      <li><code>aria-valuemax</code>: Maximum value.</li>
      <li><code>aria-valuenow</code>: Current value.</li>
    </ul>

    <p>
      If the value of the progress bar is not numeric, also add the
      <code>&lt;fas-progress-meter-text&gt;</code> component with an
      <code>acccessibleText</code> value which should include a human-readable
      version of the bar's value. This is added to the
      <code>aria-valuetext</code> attribute of the progress bar.
    </p>

    <p>
      Increase the <code>value</code> input property of the
      <code>&lt;fas-progress-meter&gt;</code>
      component to fill the progress bar.
    </p>

    <fas-progress-bar>
      <fas-progress-meter [min]="0" [max]="100" [value]="50">
        <fas-progress-meter-text
          accessibleText="50 percent"
        ></fas-progress-meter-text>
      </fas-progress-meter>
    </fas-progress-bar>
  `,
})
export class BasicsComponent {}

@NgModule({
  declarations: [BasicsComponent],
  exports: [BasicsComponent],
  imports: [FasProgressBarModule],
})
export class BasicsScam {}
