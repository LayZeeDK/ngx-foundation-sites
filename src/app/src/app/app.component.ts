import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  host: { class: 'c-example-app' },
  selector: 'example-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public readonly title: string = 'Foundation for Angular Sites';
}
