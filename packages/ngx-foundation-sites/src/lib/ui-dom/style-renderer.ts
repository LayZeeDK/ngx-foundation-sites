import {
  ElementRef,
  inject,
  Injectable,
  Renderer2,
  RendererStyleFlags2,
} from '@angular/core';

@Injectable()
export class StyleRenderer {
  #host: ElementRef<HTMLElement> = inject(ElementRef);
  #renderer = inject(Renderer2);

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

  toggleClasses(classes: Readonly<Record<string, boolean>>): void {
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
