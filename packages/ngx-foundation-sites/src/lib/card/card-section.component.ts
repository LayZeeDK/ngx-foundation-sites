import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-card-section',
  styleUrls: ['../_global-settings.scss', './card-divider.component.scss'],
  template: `<ng-content></ng-content>`,
})
export class FasCardSectionComponent {
  @HostBinding('className')
  get className(): string {
    return 'card-section';
  }
}

@NgModule({
  declarations: [FasCardSectionComponent],
  exports: [FasCardSectionComponent],
})
export class FasCardSectionScam {}
