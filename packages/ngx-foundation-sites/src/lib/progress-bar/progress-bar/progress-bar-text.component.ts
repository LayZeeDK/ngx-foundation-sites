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
  selector: 'fas-progress-bar-text',
  styles: [
    `
      fas-progress-bar-text {
        display: inline-block;
      }
    `,
  ],
  template: `<ng-content></ng-content>`,
})
export class FasProgressBarTextComponent {
  @HostBinding('className')
  get className(): string {
    return 'progress-meter-text';
  }
}

@NgModule({
  declarations: [FasProgressBarTextComponent],
  exports: [FasProgressBarTextComponent],
})
export class FasProgressBarTextScam {}
