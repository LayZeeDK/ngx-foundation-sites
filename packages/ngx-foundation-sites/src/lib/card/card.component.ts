import { ChangeDetectionStrategy, Component, HostBinding, NgModule, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-card',
  styleUrls: ['../_global-settings.scss', './card.component.scss'],
  template: ` <ng-content></ng-content> `,
})
export class FasCardComponent {
  @HostBinding('className')
  get className(): string {
    return 'card';
  }
}

@NgModule({
  declarations: [FasCardComponent],
  exports: [FasCardComponent],
})
export class FasCardScam {}
