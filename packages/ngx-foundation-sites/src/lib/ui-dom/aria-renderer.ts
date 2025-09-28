import { ElementRef, inject, Injectable, Renderer2 } from '@angular/core';

// eslint-disable-next-line @angular-eslint/use-injectable-provided-in -- This is a component-level service
@Injectable()
export class AriaRenderer {
  #host = inject(ElementRef) as ElementRef<HTMLElement>;
  #renderer = inject(Renderer2);

  setAriaAttribute(ariaName: string, value: string | null): void {
    const ariaAttributeName = `aria-${ariaName}`;

    if (value === null) {
      this.#renderer.removeAttribute(
        this.#host.nativeElement,
        ariaAttributeName
      );
    } else {
      this.#renderer.setAttribute(
        this.#host.nativeElement,
        ariaAttributeName,
        value
      );
    }
  }
}
