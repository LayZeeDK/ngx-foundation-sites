import { ElementRef, Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class AriaRenderer {
  #host: ElementRef<HTMLElement>;
  #renderer: Renderer2;

  constructor(host: ElementRef, renderer: Renderer2) {
    this.#host = host;
    this.#renderer = renderer;
  }

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
