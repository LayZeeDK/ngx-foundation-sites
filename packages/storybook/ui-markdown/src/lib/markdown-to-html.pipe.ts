import { Pipe, PipeTransform, inject, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

@Pipe({
  standalone: true,
  pure: true,
  name: 'sbMarkdownToHtml',
})
export class MarkdownToHtmlPipe implements PipeTransform {
  #domSanitizer = inject(DomSanitizer);

  transform(markdown: string): SafeHtml | null;
  transform(markdown: null): null;
  transform(markdown: string | null): SafeHtml | null {
    if (markdown === null) {
      return null;
    }

    const rawHtml = marked.parse(markdown);
    const sanitizedHtml = this.#domSanitizer.sanitize(
      SecurityContext.HTML,
      rawHtml
    );

    return sanitizedHtml === null
      ? null
      : this.#domSanitizer.bypassSecurityTrustHtml(sanitizedHtml);
  }
}
