import {
  ElementRef,
  Injectable,
  Renderer2,
  RendererStyleFlags2,
} from '@angular/core';

@Injectable()
export class StyleRenderer {
  #host: ElementRef<HTMLElement>;
  #renderer: Renderer2;

  constructor(host: ElementRef, renderer: Renderer2) {
    this.#host = host;
    this.#renderer = renderer;
  }

  addClass(name: string): void {
    this.#renderer.addClass(this.#host.nativeElement, name);
  }

  removeClass(name: string): void {
    this.#renderer.removeClass(this.#host.nativeElement, name);
  }

  updateClasses<TClass extends string = string>(
    classes: Readonly<Record<TClass, boolean>>
  ): void {
    Object.entries(classes).forEach(([className, shouldAdd]) => {
      if (shouldAdd) {
        this.addClass(className);
      } else {
        this.removeClass(className);
      }
    });
  }

  setStyle(
    style: string,
    value: string | number,
    flags?: RendererStyleFlags2
  ): void {
    this.#renderer.setStyle(this.#host.nativeElement, style, value, flags);
  }
}
