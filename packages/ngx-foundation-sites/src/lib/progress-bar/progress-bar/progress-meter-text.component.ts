import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
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
  exportAs: 'fasProgressMeterText',
  styleUrls: ['./progress-meter-text.component.scss'],
  imports: [],
  template: `<ng-content></ng-content>`,
})
export class FasProgressMeterTextComponent {
  #host: ElementRef<HTMLElement> = inject(ElementRef);
  #progressBar = inject(ProgressBarStore);
  get #textContent(): string | null {
    return this.#host.nativeElement.textContent;
  }

  @Input()
  set accessibleText(accessibleText: string | null) {
    this.#progressBar.updateAccessibleText(accessibleText);
  }

  // Use protected lifecycle hooks to minimize the public API surface
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  protected ngAfterContentChecked(): void {
    this.#progressBar.updateText(this.#textContent);
  }
}
