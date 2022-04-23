import { ChangeDetectionStrategy, Component, HostBinding, NgModule, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-card-divider',
  template: `<ng-content></ng-content>`,
})
export class FasCardDividerComponent {
  @HostBinding('className')
  get className(): string {
    return 'card-divider';
  }
}

@NgModule({
  declarations: [FasCardDividerComponent],
  exports: [FasCardDividerComponent],
})
export class FasCardDividerScam {}
