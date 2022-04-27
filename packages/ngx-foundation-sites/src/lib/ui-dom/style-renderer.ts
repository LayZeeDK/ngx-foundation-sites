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

  toggleClass(name: string, shouldAdd: boolean): void {
    if (shouldAdd) {
      this.addClass(name);
    } else {
      this.removeClass(name);
    }
  }

  updateClasses(classes: Readonly<Record<string, boolean>>): void {
    Object.entries(classes).forEach(([className, shouldAdd]) =>
      this.toggleClass(className, shouldAdd)
    );
  }

  setStyle(
    style: string,
    value: string | number,
    flags?: RendererStyleFlags2
  ): void {
    this.#renderer.setStyle(this.#host.nativeElement, style, value, flags);
  }
}
