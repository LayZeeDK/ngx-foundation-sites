import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { take } from 'rxjs';

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
  #host = inject(ElementRef) as ElementRef<HTMLElement>;
  #progressBar = inject(ProgressBarStore);
  get #textContent(): string | null {
    return this.#host.nativeElement.textContent;
  }

  @Input()
  set accessibleText(accessibleText: string | null) {
    this.#progressBar.updateAccessibleText(accessibleText);
  }
  get accessibleText(): string | null {
    let accessibleText: string | null = null;

    this.#progressBar.accessibleText$
      .pipe(take(1))
      .subscribe(x => {
        /**
         * Set the outer variable before returning from the getter
         *
         * @remarks Requires a synchronous observable.
         */
        accessibleText = x;
      })
      /**
       * Unsubscribe to prevent memory leaks in case the observable is
       * asynchronous.
       */
      .unsubscribe();

    return accessibleText;
  }

  // Use protected lifecycle hooks to minimize the public API surface
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  protected ngAfterContentChecked(): void {
    this.#progressBar.updateText(this.#textContent);
  }
}
