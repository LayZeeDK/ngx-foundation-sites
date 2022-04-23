import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-card',
  styleUrls: ['../_global-settings.scss', './card.component.scss'],
  template: `
    <div class="card">
      <ng-content></ng-content>
    </div>
  `,
})
export class FasCardComponent {}

@NgModule({
  declarations: [FasCardComponent],
  exports: [FasCardComponent],
})
export class FasCardScam {}
