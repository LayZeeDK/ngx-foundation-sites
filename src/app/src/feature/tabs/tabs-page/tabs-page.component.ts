import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display: block;' },
  selector: 'tabs-page',
  templateUrl: './tabs-page.component.html',
})
export class TabsPageComponent {}
