import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { FasTabComponent } from '../tab';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display: block;' },
  selector: 'fas-tabs',
  templateUrl: './tabs.component.html',
})
export class FasTabsComponent {
  @ContentChildren(FasTabComponent)
  public tabs!: QueryList<FasTabComponent>;

  public activate(tab: FasTabComponent): void {
    this.tabs.forEach(t => t.isActive = t === tab);
  }
}
