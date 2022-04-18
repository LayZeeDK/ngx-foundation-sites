import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Intentionally use full prefix in root element
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'example-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Foundation for Angular Sites';
}
