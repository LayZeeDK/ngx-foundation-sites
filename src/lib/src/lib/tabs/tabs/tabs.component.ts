import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { FoundationTabComponent } from '../tab';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display: block;' },
  selector: 'fas-tabs',
  templateUrl: './tabs.component.html',
})
export class FoundationTabsComponent {
  @ContentChildren(FoundationTabComponent)
  public tabs!: QueryList<FoundationTabComponent>;

  public activate(tab: FoundationTabComponent): void {
    this.tabs.forEach(t => t.isActive =
      t === tab
      ? true
      : false);
  }
}