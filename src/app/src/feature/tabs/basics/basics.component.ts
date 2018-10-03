import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display: block;' },
  selector: 'tabs-basics',
  templateUrl: './basics.component.html',
})
export class BasicsComponent {}
