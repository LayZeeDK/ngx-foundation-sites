import { ElementRef, inject, Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class AriaRenderer {
  #host: ElementRef<HTMLElement> = inject(ElementRef);
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
