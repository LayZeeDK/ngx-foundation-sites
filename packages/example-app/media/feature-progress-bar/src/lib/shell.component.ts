import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { BasicsScam } from './basics.component';
import { ColorsScam } from './colors.component';
import { NativeProgressScam } from './native-progress.component';
import { WithTextScam } from './with-text.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-progress-bar-shell',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <h1>Progress Bar</h1>

    <p>
      Show your progress. A simple way to add progress bars to your layouts. You
      only need two components to make them and they're easy to customize.
    </p>

    <ex-progress-bar-basics></ex-progress-bar-basics>

    <ex-progress-bar-colors></ex-progress-bar-colors>

    <ex-progress-bar-with-text></ex-progress-bar-with-text>

    <ex-progress-bar-native-progress></ex-progress-bar-native-progress>
  `,
})
export class ProgressBarShellComponent {}

@NgModule({
  declarations: [ProgressBarShellComponent],
  imports: [BasicsScam, ColorsScam, NativeProgressScam, WithTextScam],
})
export class ProgressBarShellScam {}
