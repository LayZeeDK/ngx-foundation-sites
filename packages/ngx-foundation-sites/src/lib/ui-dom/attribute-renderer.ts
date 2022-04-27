import { ElementRef, Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class AttributeRenderer {
  #host: ElementRef<HTMLElement>;
  #renderer: Renderer2;

  constructor(host: ElementRef, renderer: Renderer2) {
    this.#host = host;
    this.#renderer = renderer;
  }

  setAttribute(name: string, value: string | null): void {
    if (value === null) {
      this.#renderer.removeAttribute(this.#host.nativeElement, name);
    } else {
      this.#renderer.setAttribute(this.#host.nativeElement, name, value);
    }
  }
}
