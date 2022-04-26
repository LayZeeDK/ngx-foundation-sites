import { ChangeDetectionStrategy, Component, HostBinding, NgModule, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-progress-meter-text',
  styles: [
    `
      fas-progress-meter-text {
        display: inline-block;
      }
    `,
  ],
  template: `<ng-content></ng-content>`,
})
export class FasProgressMeterTextComponent {
  @HostBinding('className')
  get className(): string {
    return 'progress-meter-text';
  }
}

@NgModule({
  declarations: [FasProgressMeterTextComponent],
  exports: [FasProgressMeterTextComponent],
})
export class FasProgressMeterTextScam {}
