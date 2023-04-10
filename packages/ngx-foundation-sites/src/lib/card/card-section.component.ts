import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-card-section',
  exportAs: 'fasCardSection',
  styles: [
    `
      fas-card-section {
        display: block;
      }
    `,
  ],
  imports: [],
  template: `<ng-content></ng-content>`,
})
export class FasCardSectionComponent {
  @HostBinding('className')
  protected get className(): string {
    return 'card-section';
  }
}
