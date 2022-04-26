import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';

import { ProgressBarStore } from './progress-bar.store';

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
export class FasProgressMeterTextComponent implements AfterContentChecked {
  #host: ElementRef<HTMLElement>;
  #progressBar: ProgressBarStore;
  get #textContent(): string | null {
    return this.#host.nativeElement.textContent;
  }

  @HostBinding('className')
  get className(): string {
    return 'progress-meter-text';
  }

  constructor(progressBar: ProgressBarStore, host: ElementRef) {
    this.#host = host;
    this.#progressBar = progressBar;
  }

  ngAfterContentChecked(): void {
    this.#progressBar.updateText(this.#textContent);
  }
}

@NgModule({
  declarations: [FasProgressMeterTextComponent],
  exports: [FasProgressMeterTextComponent],
})
export class FasProgressMeterTextScam {}
