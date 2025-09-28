import type { PipeTransform} from '@angular/core';
import { inject, Pipe, SecurityContext } from '@angular/core';
import type { SafeResourceUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  standalone: true,
  pure: true,
  name: 'sbSanitizeUrl',
})
export class SanitizeUrlPipe implements PipeTransform {
  #domSanitizer = inject(DomSanitizer);

  transform(url: string): SafeResourceUrl | null;
  transform(url: null): null;
  transform(url: string | null): SafeResourceUrl | null {
    const sanitizedUrl = this.#domSanitizer.sanitize(SecurityContext.URL, url);

    return sanitizedUrl === null
      ? null
      : this.#domSanitizer.bypassSecurityTrustResourceUrl(sanitizedUrl);
  }
}
