import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { ProgressBarStore } from './progress-bar.store';

@Component({
  standalone: true,
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
  imports: [],
  template: `<ng-content></ng-content>`,
})
export class FasProgressMeterTextComponent implements AfterContentChecked {
  #host: ElementRef<HTMLElement> = inject(ElementRef);
  #progressBar = inject(ProgressBarStore);
  get #textContent(): string | null {
    return this.#host.nativeElement.textContent;
  }

  @Input()
  set accessibleText(accessibleText: string | null) {
    this.#progressBar.updateAccessibleText(accessibleText);
  }

  @HostBinding('class.progress-meter-text')
  get componentClassEnabled(): boolean {
    return true;
  }

  ngAfterContentChecked(): void {
    this.#progressBar.updateText(this.#textContent);
  }
}
