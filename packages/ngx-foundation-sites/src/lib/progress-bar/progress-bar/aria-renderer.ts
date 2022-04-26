import { ElementRef, Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class AriaRenderer {
  #host: ElementRef<HTMLElement>;
  #renderer: Renderer2;

  constructor(host: ElementRef, renderer: Renderer2) {
    this.#host = host;
    this.#renderer = renderer;
  }

  setAriaAttribute(ariaName: string, value: string): void {
    this.#renderer.setAttribute(
      this.#host.nativeElement,
      `aria-${ariaName}`,
      value
    );
  }
}
