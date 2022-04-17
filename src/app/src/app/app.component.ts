import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Intentionally use full prefix in root element
  // tslint:disable-next-line: component-selector
  selector: 'example-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  @HostBinding('className')
  get className(): string {
    return 'c-example-app';
  }

  public readonly title: string = 'Foundation for Angular Sites';
}
